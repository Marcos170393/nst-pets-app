import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { Role } from './entities/role.entity';
import { RoleService } from './role.service';

@Module({
    imports:[
        TypeOrmModule.forFeature([User,Role])
    ],
    controllers: [UsersController],
    providers: [UsersService, RoleService]
})
export class UsersModule {}
