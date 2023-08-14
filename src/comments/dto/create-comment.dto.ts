import { Film } from "src/films/entities/film.entity";
import { User } from "src/users/entities/user.entity";
import {Entity,PrimaryGeneratedColumn,Column,CreateDateColumn,UpdateDateColumn,ManyToOne,JoinColumn} from "typeorm";
import { IsNotEmpty } from 'class-validator';

export class CreateCommentDto {

    @IsNotEmpty()
    filmId: number;

    @IsNotEmpty()
    comment: string;

}
