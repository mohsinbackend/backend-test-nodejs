import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ElasticSearchService } from './elastic-search.service';

@Controller('elastic-search')
export class ElasticSearchController {
  constructor(private readonly elasticSearchService: ElasticSearchService) {}

  @Get('search')
  async searchPokemonAbilities(@Query('q') q: string) {
        const results = await this.elasticSearchService.searchIndex(q);
        return results;
  }

  @Post('create')
    async createIndexAndInsert(@Body() film: any[]) {
        return await this.elasticSearchService.bulkInsert(film);
  }


}
