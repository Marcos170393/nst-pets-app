import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";
import { Role } from "./role.entity";

@Entity({name:'users'})
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type:'varchar',length:150})
    username: string;

    @Column()
    email: string;

    @ManyToOne( ()=> Role, (role)=> role)
    role: Role;

    @Column()
    password: string;

    @Column()
    phone: string;

    @CreateDateColumn()
    created_at: Date;
    
    @UpdateDateColumn()
    updated_at: Date;
}