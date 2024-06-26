import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ClientModule } from 'src/client/client.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './config';
import { JwtStrategy } from './jwt-strategy';
import { LocalStrategy } from './local-strategy';

@Module({
  imports: [
    ClientModule,
    PassportModule, 
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: {expiresIn: '4500s'}
    })],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService]
})
export class AuthModule {}
