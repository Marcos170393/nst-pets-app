import { IsEmail, IsNumber, IsString } from "class-validator";

export class CreateUserDto {
    
    @IsString()
    name: string;

    @IsString()
    lastname: string;

    @IsNumber()
    phone: string;

    @IsEmail()
    mail: string;
}