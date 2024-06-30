import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      usernameField:'client_id',
      passwordField:'client_secret'
    });
  }

  async validate(client_id: number, client_secret: string): Promise<any> {
    const client = await this.authService.validateClient(client_id, client_secret);
    if (!client) {
      throw new UnauthorizedException();
    }
    return client;
  }
}