import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { LoginUserDto } from './dto/login-user.dto';
import { RegisterUserDto } from './dto/register-user.dto';


@Controller('users')
export class UsersController {
  
  constructor(private readonly usersService: UsersService) {}

  @Post('/login')
  login(@Body() loginUserDto:LoginUserDto){
    return this.usersService.login(loginUserDto);
  }
  
  @Post('/register')
  register(@Body() registerUserDto: RegisterUserDto) {
    return this.usersService.register(registerUserDto);
  }



}
