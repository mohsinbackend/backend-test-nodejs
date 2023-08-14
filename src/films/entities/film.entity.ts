import { Rate } from "src/rates/entities/rate.entity";
import { Comment } from "src/comments/entities/comment.entity";
import {Entity,PrimaryGeneratedColumn,Column,CreateDateColumn,UpdateDateColumn,OneToMany,Index} from "typeorm";

@Entity('films')
export class Film {

    @PrimaryGeneratedColumn()
    id: number


    @Index({ fulltext: true })
    @Column({nullable: false})
    name: string
    
    @Index({ fulltext: true })
    @Column("text")
    description: string
    
    @Column({type:'date'})
    release_date:string
    
    @Column({type:"decimal",precision:2,scale:1})
    rating:number 
    
    @Column({type:"decimal",precision:5,scale:2})
    ticket_price:number 
    
    @Column()
    country: string
  
    @Column()
    photo: string

    @Column({name:'genre',type:'enum',enum: ['Action','Horror','Thriller','Drama','Comedy','Science Fiction','Animation','Adventure'] })
    genre:string
  
    @CreateDateColumn()
    createdAt: Date;
 
    @UpdateDateColumn()
    updatedAt: Date;

    @OneToMany(() => Rate, (rate) => rate.film)
    rates: Rate[]

    @OneToMany(() => Comment, (comment) => comment.film)
    comments: Comment[]


}
