import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "./auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){
    constructor(private authService: AuthService){
        super();
    }

    async validate(client_id: number, client_secret: string): Promise<any>{
        const client = await this.authService.validateClient(client_id,client_secret);
        if(!client){
            throw new UnauthorizedException();
        }
        return client;
    }
}