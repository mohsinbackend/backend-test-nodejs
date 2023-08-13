import * as bcrypt from 'bcrypt';
import { User } from './entities/user.entity';
import { Injectable,Inject } from '@nestjs/common';
import { RegisterUserDto } from './dto/register-user.dto';
import { Repository } from 'typeorm';
import { ConflictException,HttpStatus } from '@nestjs/common';



@Injectable()
export class UsersService {

  
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) {}


  async register(user: RegisterUserDto) {

    const findUser = await this.userRepository.findOne({ where: { email:user.email} });
    if (findUser){
      throw new ConflictException('Email address already exist.');
    }else{
      user.password = await bcrypt.hash(user.password,10);
      const newUser = this.userRepository.create(user);
      await this.userRepository.save(newUser);
      return {statusCode:HttpStatus.CREATED,message:`Registration successfully completed. Please login it.`};
    }


  }



}
