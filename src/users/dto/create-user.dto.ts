import { IsEmail, IsNumber, IsString, Length, Validate } from "class-validator";
import { IdValidator } from "src/libraries/class-validator/id.validator";

export class CreateUserDto {
    
    @IsString()
    @Length(10,150)
    username: string;

    @IsNumber()
    phone: string;

    @Validate(IdValidator)
    roleId: number;

    @IsString()
    @Length(10,150)
    password: string;

    @IsEmail()
    email: string;
}