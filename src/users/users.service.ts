import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { Role } from './entities/role.entity';
import { RoleService } from './role.service';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private readonly userRepo: Repository<User>,
        private readonly roleService: RoleService
    ){}

    async create(user: CreateUserDto): Promise<User> {
        const { roleId } = user; 
    
        const role = await this.roleService.findOne(roleId);
        if(!role){
            throw new NotFoundException('Rol no existe');
        }
        return await this.userRepo.save({
            role: role,
            ...user
        });
    }

    async findAll(): Promise< User[] >{
        return await this.userRepo.find();
    }
}
