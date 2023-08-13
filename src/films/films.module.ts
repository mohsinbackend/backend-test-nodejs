import { Module } from '@nestjs/common';
import { FilmsService } from './films.service';
import { FilmsController } from './films.controller';
import { DatabaseModule } from 'src/db/database.module';
import { filmProviders } from './film.providers';


@Module({
  imports: [DatabaseModule],
  controllers: [FilmsController],
  providers: [...filmProviders,FilmsService],
})
export class FilmsModule {}
