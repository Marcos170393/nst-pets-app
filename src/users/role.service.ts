import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from './entities/role.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RoleService {
    constructor(
        @InjectRepository(Role) private readonly roleRepo: Repository<Role>
    ){}

    async exist(id: number): Promise<boolean> {
        return await this.roleRepo.exists({where:{ id }});
    }

    async findOne(id: number): Promise<Role> {
        return await this.roleRepo.findOneBy({id});
    }
}
