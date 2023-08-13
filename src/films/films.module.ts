import { Module } from '@nestjs/common';
import { FilmsService } from './films.service';
import { FilmsController } from './films.controller';
import { DatabaseModule } from 'src/db/database.module';


@Module({
  imports:[DatabaseModule],
  controllers: [FilmsController],
  providers: [FilmsService],
})
export class FilmsModule {}
