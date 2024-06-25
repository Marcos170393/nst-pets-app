import { Injectable } from '@nestjs/common';
import { ClientService } from 'src/client/client.service';

@Injectable()
export class AuthService {
    constructor(private clientService: ClientService){}

    async validateClient(client_id: number, client_secret: string){
        const client = await this.clientService.find({client_id,client_secret});
        if(client){
            const {client_secret, ...result } = client;
            return result;
        }
        return null;
    }
}
