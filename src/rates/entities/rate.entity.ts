import { Film } from "src/films/entities/film.entity";
import { User } from "src/users/entities/user.entity";
import {Entity,PrimaryGeneratedColumn,Column,CreateDateColumn,UpdateDateColumn,ManyToOne,JoinColumn} from "typeorm";


@Entity('rates')
export class Rate {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'number' })
    filmId: number;

    @Column({ type: 'number' })
    userId: number;

    @Column({type:"decimal",precision:1,scale:1})
    rating:number

    @CreateDateColumn()
    createdAt: Date;
 
    @UpdateDateColumn()
    updatedAt: Date;

    @ManyToOne(() => Film, (film) => film.rates)
    @JoinColumn({name:'filmId'})
    film: Film

    @ManyToOne(() => User, (user) => user.rates)
    @JoinColumn({name:'userId'})
    
    user: User

}
