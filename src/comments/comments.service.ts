import { Request } from 'express';
import { REQUEST } from '@nestjs/core';
import { Repository } from 'typeorm';
import { Injectable,Inject, NotFoundException } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { User } from 'src/users/entities/user.entity';
import { Film } from 'src/films/entities/film.entity';
import { Comment } from './entities/comment.entity';

@Injectable()
export class CommentsService {

  constructor(
    @Inject(REQUEST) private readonly request: Request,
    @Inject('FILM_REPOSITORY')private filmRepository: Repository<Film>,
    @Inject('USER_REPOSITORY')private userRepository: Repository<User>,
    @Inject('COMMENT_REPOSITORY')private commentRepository: Repository<Comment>,
  ) {}

  async create(createCommentDto: CreateCommentDto) {
    
    const userId = this.request.user['id'];
    const {filmId,comment} = createCommentDto;

    const film = await this.filmRepository.findOne({ where:{id:filmId}});
    if (!film) { throw new NotFoundException('Film Id does not exist!'); } 

    const user = await this.userRepository.findOne({where:{id:userId}});
    if (!user) { throw new NotFoundException('User Id does not exist!'); } 

    const _comment = new Comment();
    _comment.userId=userId;
    _comment.filmId=filmId;
    _comment.comment=comment;

    await this.commentRepository.save(_comment);
    return _comment;


  }


  findAll() {
    return `This action returns all comments`;
  }

  findOne(id: number) {
    return `This action returns a #${id} comment`;
  }

  update(id: number, updateCommentDto: UpdateCommentDto) {
    return `This action updates a #${id} comment`;
  }

  remove(id: number) {
    return `This action removes a #${id} comment`;
  }
}
