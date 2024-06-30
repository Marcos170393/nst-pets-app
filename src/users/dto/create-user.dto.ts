import { IsEmail, IsNumber, IsString, Length } from "class-validator";

export class CreateUserDto {
    
    @IsString()
    @Length(10,150)
    username: string;

    @IsNumber()
    phone: string;

    @IsNumber()
    roleId: number;

    @IsString()
    @Length(10,150)
    password: string;

    @IsEmail()
    email: string;
}