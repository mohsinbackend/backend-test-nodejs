import { Module } from '@nestjs/common';
import { RatesService } from './rates.service';
import { RatesController } from './rates.controller';
import { JwtService } from '@nestjs/jwt';
import { rateProviders } from './rate.providers';
import { DatabaseModule } from 'src/db/database.module';
import { filmProviders } from 'src/films/film.providers';
import { userProviders } from 'src/users/user.providers';

@Module({
  imports: [
    DatabaseModule,
  ],
  controllers: [RatesController],
  providers: [...rateProviders,...filmProviders,...userProviders,RatesService,JwtService],
})
export class RatesModule {}
