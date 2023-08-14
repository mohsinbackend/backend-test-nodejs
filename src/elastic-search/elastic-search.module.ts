import { Module } from '@nestjs/common';
import { ElasticSearchService } from './elastic-search.service';
import { ElasticSearchController } from './elastic-search.controller';
import { DatabaseModule } from 'src/db/database.module';
import { filmProviders } from 'src/films/film.providers';


@Module({
  imports: [DatabaseModule],
  controllers: [ElasticSearchController],
  providers: [...filmProviders,ElasticSearchService],
})
export class ElasticSearchModule {}
