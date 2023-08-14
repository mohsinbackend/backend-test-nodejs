import { Film } from './entities/film.entity';

import { CreateFilmDto } from './dto/create-film.dto';
import { UpdateFilmDto } from './dto/update-film.dto';
import { Repository,Like } from 'typeorm';
import {Injectable,Inject, NotFoundException } from '@nestjs/common';



@Injectable()
export class FilmsService {

  constructor(
    @Inject('FILM_REPOSITORY')
    private filmRepository: Repository<Film>,
  ) {}

  async searchByNameDiscrip(query): Promise<Film[]> {

    return this.filmRepository.createQueryBuilder('film')
    .orWhere('film.name like :query',{query: `%${query}%`})
    .orWhere('film.description like :query',{query: `%${query}%`})   
    .getMany();
    
    
    // return this.filmRepository.find({
    //   where: {
    //     //name: Like(`%${query}%`),
    //     description: Like(`%${query}%`)
    //   },
    // });

  }


  async create(film: CreateFilmDto): Promise<Film> {

    const newFilm = this.filmRepository.create(film);
    return this.filmRepository.save(newFilm);

  }

  async findAll(): Promise<Film[]> {
    return this.filmRepository.find();
  }

  async findOne(id: number) {
    const film = await this.filmRepository.findOne({ where: { id } });
    if (!film) {
      throw new NotFoundException('Film does not exist!');
    } else { return film; }
  }

  async update(id: number, film: UpdateFilmDto): Promise<Film> {
    await this.filmRepository.update(id, film);
    return this.filmRepository.findOne({ where: { id } });
  }

  async remove(id: number) {
    const film = await this.filmRepository.findOne({ where: { id } });
    if (!film) {
      throw new NotFoundException('Film does not exist!');
    } else {
      return this.filmRepository.delete(id);
    }

  }
}
