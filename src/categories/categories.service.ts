import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Category } from './categories.model';
import { CreateCategoryDto } from './dto/create_category.dto';

@Injectable()
export class CategoriesService {
  constructor(@InjectModel(Category) private categoryRepository: typeof Category) {}

  async create(dto: CreateCategoryDto) {
    return await this.categoryRepository.create(dto);
  }

  async update(id: number, dto: CreateCategoryDto) {
    return await this.categoryRepository.update({ ...dto }, { returning: true, where: { id } });
  }

  async getAll() {
    return await this.categoryRepository.findAll();
  }

  async getById(id: number) {
    return await this.categoryRepository.findOne({ where: { id }, include: { all: true }});
  }
}
