import { Body, Controller, Get, Post, Response, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
@UseGuards(JwtAuthGuard)
export class UsersController {


    @Post()
    async create(@Body() user: CreateUserDto){

    }

    @Get()
    async getAll(){
        return 'ok!!';
    }
}
