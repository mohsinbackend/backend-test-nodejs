import { Film } from "src/films/entities/film.entity";
import { User } from "src/users/entities/user.entity";
import {Entity,PrimaryGeneratedColumn,Column,CreateDateColumn,UpdateDateColumn,ManyToOne} from "typeorm";


@Entity('rates')
export class Rate {

    @PrimaryGeneratedColumn()
    id: number

    @Column({type:"decimal",precision:1,scale:1})
    rating:number

    @CreateDateColumn()
    createdAt: Date;
 
    @UpdateDateColumn()
    updatedAt: Date;

    @ManyToOne(() => User, (user) => user.comments)
    user: User

    @ManyToOne(() => Film, (film) => film.comments)
    film: Film

}
