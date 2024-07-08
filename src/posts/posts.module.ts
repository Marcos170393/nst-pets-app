import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsController } from './posts.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature([])
    ],
    controllers: [PostsController]
})
export class PostsModule {
}
