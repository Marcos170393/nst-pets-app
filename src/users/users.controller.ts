import { Body, Controller, Get, Post, Response, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
@UseGuards(JwtAuthGuard)
export class UsersController {
    constructor(
        private readonly userService: UsersService
    ){}

    @Post()
    async create(@Body() user: CreateUserDto){
        return await this.userService.create(user);
    }

    @Get()
    async getAll(){
        return await this.userService.findAll();
    }
}
