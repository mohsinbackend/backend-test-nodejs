import { JwtService } from '@nestjs/jwt';
import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsController } from './comments.controller';
import { commentProviders } from './comment.providers';
import { DatabaseModule } from 'src/db/database.module';
import { filmProviders } from 'src/films/film.providers';
import { userProviders } from 'src/users/user.providers';

@Module({
  imports:[DatabaseModule],
  controllers: [CommentsController],
  providers: [...commentProviders,...filmProviders,...userProviders,CommentsService,JwtService],
})
export class CommentsModule {}
