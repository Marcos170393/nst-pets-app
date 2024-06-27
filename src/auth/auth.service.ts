import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ClientService } from 'src/client/client.service';
import { AuthCredentialsDto} from './dto/auth-credentials.dto';

@Injectable()
export class AuthService {
    constructor(
        private clientService: ClientService,
        private jwtService: JwtService
    ){}

    async validateClient(client_id: number, client_secret: string){
        console.log('hola');
        const client = await this.clientService.find({client_id,client_secret});
        if(client){
            const {client_secret, ...result } = client;
            return result;
        }
        return null;
    }
    
    async login(client: AuthCredentialsDto): Promise<any> {
        const payload =  {client_id: client.client_id, client_secret: client.client_secret};
        return {
            access_token: this.jwtService.sign(payload),
        }
    }
}
