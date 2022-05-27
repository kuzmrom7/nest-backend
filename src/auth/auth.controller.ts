import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAdminDto } from '../admins/dto/create_admin.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AuthOutputDto } from "./auth_output.dto";

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiOperation({ summary: 'Login admin' })
  @ApiResponse({ status: 200, type: AuthOutputDto })
  @Post('/login')
  login(@Body() adminDto: CreateAdminDto) {
    return this.authService.login(adminDto);
  }

  @ApiOperation({ summary: 'Register admin' })
  @ApiResponse({ status: 200, type: AuthOutputDto })
  @Post('/signup')
  signup(@Body() adminDto: CreateAdminDto) {
    return this.authService.signup(adminDto);
  }
}
