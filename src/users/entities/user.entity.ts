import { Rate } from "src/rates/entities/rate.entity";
import { Comment } from "src/comments/entities/comment.entity";
import {Entity,PrimaryGeneratedColumn,Column,CreateDateColumn,UpdateDateColumn,OneToMany} from "typeorm";

@Entity('users')
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ nullable: false })
    name: string
    
    @Column({unique:true,nullable: false})
    email: string

    @Column({nullable: false})
    password: string

    @CreateDateColumn()
    createdAt: Date;
 
    @UpdateDateColumn()
    updatedAt: Date;

    @OneToMany(() => Rate, (rate) => rate.user)
    rates: Rate[]

    @OneToMany(() => Comment, (comment) => comment.user)
    comments: Comment[]

    
}
