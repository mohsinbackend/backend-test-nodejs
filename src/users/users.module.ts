import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { userProviders } from './user.providers';
import { DatabaseModule } from 'src/db/database.module';
import { JwtService } from '@nestjs/jwt';
import { UserGuard } from './user.guard';


@Module({
  imports: [
    DatabaseModule,
  ],
  controllers: [UsersController],
  providers: [...userProviders,UsersService,JwtService],
})
export class UsersModule {}
