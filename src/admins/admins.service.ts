import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Admin } from './admins.model';
import { CreateAdminDto } from './dto/create_admin.dto';

@Injectable()
export class AdminsService {
  constructor(@InjectModel(Admin) private adminRepository: typeof Admin) {}

  async create(dto: CreateAdminDto) {
    return await this.adminRepository.create(dto);
  }

  async get(id: number) {
    return await this.adminRepository.findOne({
      where: { id },
      attributes: ['id', 'email']
    });
  }

  async getByEmail(email: string): Promise<Admin> {
    return await this.adminRepository.findOne({
      where: { email },
      include: { all: true },
    });
  }
}
