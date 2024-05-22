import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Client } from './entities/client.entity';
import { Observable } from 'rxjs';
import { FindClientDTO } from './DTO/find-client.dto';

@Injectable()
export class ClientService {

    constructor(
        @InjectRepository(Client) private readonly clientRepository: Repository<Client>
    ){}

    async create(clientName: string){
        const userExists = await this.clientRepository.findOneBy({'client_name':clientName});
        if(userExists){
            return Response.json({
                "code":403,
                "message": "Client already exists"
            });
        }
        return await this.clientRepository.insert({"client_name":clientName});
    }

    async find(client:FindClientDTO): Promise<Client | null>{
        return await this.clientRepository.findOneBy({
            client_id: client.client_id,
            client_secret: client.client_secret
        });
    }
}
