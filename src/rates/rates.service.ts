import { Request } from 'express';
import { REQUEST } from '@nestjs/core';
import { CreateRateDto } from './dto/create-rate.dto';
import { UpdateRateDto } from './dto/update-rate.dto';
import { Repository } from 'typeorm';
import { Rate } from './entities/rate.entity';
import { User } from 'src/users/entities/user.entity';
import { Film } from 'src/films/entities/film.entity';
import { ConflictException, Inject, Injectable, NotFoundException, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.REQUEST })
export class RatesService {

  constructor(
    @Inject(REQUEST) private readonly request: Request,
    @Inject('RATE_REPOSITORY')private rateRepository: Repository<Rate>,
    @Inject('FILM_REPOSITORY')private filmRepository: Repository<Film>,
    @Inject('USER_REPOSITORY')private userRepository: Repository<User>,
  ) {}

  async create(createRateDto: CreateRateDto) {
    
    const {filmId} = createRateDto
    const {userId} = this.request.user['id'];

    const film = await this.filmRepository.findOne({ where:{id:filmId}});
    if (!film) { throw new NotFoundException('Film Id does not exist!'); } 

    const user = await this.userRepository.findOne({where:{id:userId}});
    if (!user) { throw new NotFoundException('User Id does not exist!'); } 

    const rate = await this.rateRepository.findOne({where:{userId,filmId}});
    if(rate){ throw new ConflictException('You have already rated in this film.') }



    const _rate = new Rate();
    _rate.filmId = createRateDto.filmId;
    _rate.rating = createRateDto.rating;
    _rate.userId = this.request.user['id'];
    await this.rateRepository.save(_rate);
    return _rate;

    //const rate = await this.rateRepository.findOne({ where: { email:loginUserDto.username} });

    //return this.request.userId;

  }

  findAll() {
    return `This action returns all rates`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rate`;
  }

  update(id: number, updateRateDto: UpdateRateDto) {
    return `This action updates a #${id} rate`;
  }

  remove(id: number) {
    return `This action removes a #${id} rate`;
  }
  
}
