import { Body, Controller, Get, Post } from '@nestjs/common';
import { ClientService } from './client.service';
import { CreateClientDTO } from './DTO/create-client.dto';
import { FindClientDTO } from './DTO/find-client.dto';

@Controller('client')
export class ClientController {
    constructor(
        private readonly clientService:ClientService
    ){}
    @Post('/find')
    async find(@Body() req: FindClientDTO){
        return await this.clientService.find(req);
    }
    @Post()
    async create(@Body() req: CreateClientDTO){
        return await this.clientService.create(req.client_name);
    }

}
