import { Module } from '@nestjs/common';
import { ElasticSearchService } from './elastic-search.service';
import { ElasticSearchController } from './elastic-search.controller';

@Module({
  controllers: [ElasticSearchController],
  providers: [ElasticSearchService],
})
export class ElasticSearchModule {}
