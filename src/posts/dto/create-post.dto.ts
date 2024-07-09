import { IsString, Length, Validate } from "class-validator";
import { UserIdValidator } from "src/decorators/class-validator/user-id.validator";

export class CreatePostDto {
    @IsString()
    title: string;    

    @IsString()
    @Length(100,1000)
    description: string;

    @IsString()
    imageUrl: string;

    @Validate(UserIdValidator)
    authorId: number;
}