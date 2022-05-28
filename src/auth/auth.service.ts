import { ConflictException, HttpException, Injectable, UnauthorizedException } from '@nestjs/common';
import { AdminsService } from '../admins/admins.service';
import { Admin } from '../admins/admins.model';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { CreateAdminDto } from '../admins/dto/create_admin.dto';

@Injectable()
export class AuthService {
  constructor(private adminService: AdminsService, private jwtService: JwtService) {}

  async login(adminDto: CreateAdminDto) {
    const admin = await this.validateUser(adminDto);

    return this.generateToken(admin);
  }

  async signup(adminDto: CreateAdminDto) {
    const candidate = await this.adminService.getByEmail(adminDto.email);
    if (candidate) {
      throw new ConflictException();
    }
    const hash = await bcrypt.hash(adminDto.password, 5);
    const user = await this.adminService.create({
      ...adminDto,
      password: hash,
    });

    return this.generateToken(user);
  }

  private async generateToken(admin: Admin) {
    const payload = { id: admin.id, email: admin.email, approved: admin.approved };
    return {
      token: this.jwtService.sign(payload),
    };
  }

  private async validateUser(adminDto: CreateAdminDto) {
    const admin = await this.adminService.getByEmail(adminDto.email);
    const compared = await bcrypt.compare(adminDto.password, admin.password);

    if (!compared) {
      throw new UnauthorizedException({ message: 'Invalid data' });
    }

    return admin;
  }
}
