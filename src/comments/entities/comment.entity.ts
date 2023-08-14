import { User } from "src/users/entities/user.entity";
import { Film } from "src/films/entities/film.entity";
import {Entity,PrimaryGeneratedColumn,Column,CreateDateColumn,UpdateDateColumn,ManyToOne,JoinColumn} from "typeorm";

@Entity('comments')
export class Comment {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'number' })
    filmId: number;

    @Column({ type: 'number' })
    userId: number;

    @Column("text")
    comment: string

    @CreateDateColumn()
    createdAt: Date;
 
    @UpdateDateColumn()
    updatedAt: Date;

    @ManyToOne(() => Film, (film) => film.comments)
    @JoinColumn({name:'filmId'})
    film: Film

    @ManyToOne(() => User, (user) => user.comments)
    @JoinColumn({name:'userId'})
    user: User
}
