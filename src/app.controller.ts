import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { AuthCredentialsDto } from './auth/dto/auth-credentials.dto';

@Controller('/')
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req: AuthCredentialsDto ) {
    console.log(req);
    return this.authService.login(req);
  }

}
