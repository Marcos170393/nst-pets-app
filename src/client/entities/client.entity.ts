import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:"clients"})
export class Client{

    @PrimaryGeneratedColumn()
    client_id: number;

    @Column({unique:true})
    client_name: string;
    
    @PrimaryGeneratedColumn("uuid")
    client_secret: string;
}