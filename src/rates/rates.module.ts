import { Module } from '@nestjs/common';
import { RatesService } from './rates.service';
import { RatesController } from './rates.controller';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [RatesController],
  providers: [RatesService,JwtService],
})
export class RatesModule {}
