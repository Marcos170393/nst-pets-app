import { IsEmail, IsNumber, IsString, Length, Validate } from "class-validator";
import { RolIdValidator } from "src/decorators/class-validator/rol-id.validator";

export class CreateUserDto {
    
    @IsString()
    @Length(10,150)
    username: string;

    @IsNumber()
    phone: string;

    @Validate(RolIdValidator)
    roleId: number;

    @IsString()
    @Length(10,150)
    password: string;

    @IsEmail()
    email: string;
}