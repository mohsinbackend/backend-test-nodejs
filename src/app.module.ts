import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FilmsModule } from './films/films.module';
import { DatabaseModule } from './db/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { CommentsModule } from './comments/comments.module';
import { RatesModule } from './rates/rates.module';


@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [ConfigModule.forRoot(),TypeOrmModule,DatabaseModule,FilmsModule, UsersModule, CommentsModule, RatesModule],
})
export class AppModule {}
