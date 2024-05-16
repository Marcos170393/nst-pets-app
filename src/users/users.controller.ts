import { Controller, Get, Response } from '@nestjs/common';

@Controller('users')
export class UsersController {

    @Get()
    async getAll(){
        return 'ok!!'
    }
}
