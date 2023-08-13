import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { userProviders } from './user.providers';
import { DatabaseModule } from 'src/db/database.module';
import { JwtModule,JwtService } from '@nestjs/jwt';
import { jwtConstants } from 'src/constants';


@Module({
  imports: [
    DatabaseModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: {
        expiresIn: '60d'
      },
    }),
    // JwtModule.register({
    //   global: true,
    //   //secret: process.env.SECRET,
    //   secret:"adfkjadklfjaksdjflkadsjflkkjasdklfjkalsdsjflkadsjflkjadslkfjdlkasfj",
    //   signOptions: { expiresIn: '20m' },
    // }),
  ],
  controllers: [UsersController],
  providers: [...userProviders,UsersService,JwtService],
})
export class UsersModule {}
