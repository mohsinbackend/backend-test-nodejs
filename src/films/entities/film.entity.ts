import {Entity,PrimaryGeneratedColumn,Column,CreateDateColumn,UpdateDateColumn} from "typeorm";

@Entity('films')
export class Film {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string
    
    @Column()
    description: string
    
    @Column({type:'date'})
    release_date:string
    
    @Column({type:"decimal",precision:1,scale:1})
    rating:number 
    
    @Column({type:"decimal",precision:5,scale:2})
    ticket_price:number 
    
    @Column()
    country: string
  
    @Column()
    photo: string

    @Column({name:'genre',type:'enum',enum: ['Action','Horror','Thriller','Drama','Comedy','Science Fiction'] })
    genre:string
  

    @CreateDateColumn()
    createdAt: Date;
 
    @UpdateDateColumn()
    updatedAt: Date;

}
