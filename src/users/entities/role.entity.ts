import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'roles'})
export class Role {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({nullable: true})
    description: string;
}