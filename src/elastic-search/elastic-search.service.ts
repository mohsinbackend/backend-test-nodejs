import { Repository } from 'typeorm';
import * as elasticsearch from 'elasticsearch';
import { Film } from 'src/films/entities/film.entity';
import { Injectable,HttpException, Inject } from '@nestjs/common';

@Injectable()
export class ElasticSearchService {

  
    private readonly esclient: elasticsearch.Client;

    constructor(
        @Inject('FILM_REPOSITORY')
        private filmRepository: Repository<Film>,
    ) {

        
        this.esclient = new elasticsearch.Client({
            host: 'https://localhost:9200', // replace with your cluster endpoint
        });
        this.esclient.ping({ requestTimeout: 3000 }).then(()=>{
            this.syncingDBtoElasticSearch();
        }).catch(err => { 
            throw new HttpException({
                status: 'error',
                message: 'Unable to reach Elasticsearch cluster'
             }, 500); 


        });


    }

    async syncingDBtoElasticSearch(){
        const films = await this.filmRepository.find();
        this.bulkInsert(films);
    }


    async bulkInsert(abilities: any[]) {
        const bulk = [];
        abilities.forEach(ability => {
            bulk.push({ 
                index: {_index: 'pokemons', _type: 'abilities'} 
            });
            bulk.push(ability);
        });
        return await this.esclient.bulk({
            body: bulk, 
            index: 'pokemons', 
            type: 'abilities'
        })
        .then(res => ({status: 'success', data: res}))
        .catch(err => { throw new HttpException(err, 500); });
    }

    // searches the 'pokemons' index for matching documents
    async searchIndex(q: string) {
        const body = {
            size: 200,
            from: 0,
            query: {
                match: {
                    url: q,
                },
            },
        };
        return await this.esclient.search({index: 'pokemons', body, q})
            .then(res => res.hits.hits)
            .catch(err => { throw new HttpException(err, 500); });
    }




}
