import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from './products.model';
import { CreateProductDto } from './dto/create_product.dto';
import { CategoriesService } from '../categories/categories.service';
import { UpdateProductDto } from './dto/update_product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product) private productRepository: typeof Product,
    private categoriesService: CategoriesService,
  ) {}

  async create(dto: CreateProductDto) {
    const category = await this.categoriesService.getById(dto.categoryId);

    if (!category) {
      throw new BadRequestException();
    }
    const product = await this.productRepository.create(dto);

    await product.$set('category', category);
    product.category = category;

    return product;
  }

  async getAll() {
    return await this.productRepository.findAll({ include: { all: true } });
  }

  async getById(id: number) {
    return await this.productRepository.findOne({ where: { id }, include: { all: true } });
  }

  async update(id: number, dto: UpdateProductDto) {
    return await this.productRepository.update({ ...dto }, { returning: true, where: { id } });
  }
}
