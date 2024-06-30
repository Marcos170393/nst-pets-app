import { IsNumber, IsUUID } from "class-validator";

export class AuthCredentialsDto {
    @IsNumber()
    client_id: number;

    @IsUUID()
    client_secret: string;
}