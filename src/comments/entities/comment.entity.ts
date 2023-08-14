import {Entity,PrimaryGeneratedColumn,Column,CreateDateColumn,UpdateDateColumn,ManyToOne} from "typeorm";
import { User } from "src/users/entities/user.entity";
import { Film } from "src/films/entities/film.entity";

@Entity('comments')
export class Comment {
    @PrimaryGeneratedColumn()
    id: number

    @Column("text")
    comment: string

    @CreateDateColumn()
    createdAt: Date;
 
    @UpdateDateColumn()
    updatedAt: Date;

    @ManyToOne(() => User, (user) => user.comments)
    user: User

    @ManyToOne(() => Film, (film) => film.comments)
    film: Film
}
