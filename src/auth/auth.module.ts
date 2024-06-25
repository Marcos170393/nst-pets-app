import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ClientModule } from 'src/client/client.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [ClientModule, PassportModule],
  providers: [AuthService, LocalStrategy]
})
export class AuthModule {}
