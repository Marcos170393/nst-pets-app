import { Length, Max } from "class-validator";
import { User } from "src/users/entities/user.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name:'posts'})
export class Post {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true})
    @Length(50,100)
    title: string;

    @Column()
    @Length(200, 1000)
    description: string;

    @Column()
    imageUrl: string;

    @ManyToOne( ()=> User, (user) => user)
    auth: User;

    @CreateDateColumn()
    created_at: Date;
    
    @UpdateDateColumn()
    updated_at: Date;

}