import * as bcrypt from 'bcrypt';
import { User } from './entities/user.entity';
import { Injectable,Inject } from '@nestjs/common';
import { LoginUserDto } from './dto/login-user.dto';
import { RegisterUserDto } from './dto/register-user.dto';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { ConflictException,HttpStatus,UnauthorizedException } from '@nestjs/common';

@Injectable()
export class UsersService {

  
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}


  async login(loginUserDto:LoginUserDto){
    const user = await this.userRepository.findOne({ where: { email:loginUserDto.username} });
    if(!user || !await bcrypt.compare(loginUserDto.password,user.password)){
      throw new UnauthorizedException(`Invalid Creadentials!`)
    }else{

      const payload = { id:user.id,name:user.name,email:user.email };
      return {
        user:payload,
        access_token: await this.jwtService.signAsync(payload,{secret:process.env.PORT,expiresIn:process.env.JWT_EXPIRES})
      };
    }

    
  }

  async register(registerUserDto: RegisterUserDto) {

    const user = await this.userRepository.findOne({ where: { email:registerUserDto.email} });
    if (user){
      throw new ConflictException('Email address already exist.');
    }else{
      registerUserDto.password = await bcrypt.hash(registerUserDto.password,10);
      const newUser = this.userRepository.create(registerUserDto);
      await this.userRepository.save(newUser);
      return {statusCode:HttpStatus.CREATED,message:`Registration successfully completed. Please login it.`};
    }


  }




}
