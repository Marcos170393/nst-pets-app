import { PartialType } from "@nestjs/mapped-types";
import { IsEmail, IsNumber, IsString, Length, Validate } from "class-validator";
import { RolIdValidator } from "src/decorators/class-validator/rol-id.validator";
import { CreateUserDto } from "./create-user.dto";

export class UpdateUserDto extends PartialType(CreateUserDto){
}