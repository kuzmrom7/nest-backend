import { Body, Controller, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateProductDto } from './dto/create_product.dto';
import { UpdateProductDto } from './dto/update_product.dto';
import { JwtAuthAdminGuard } from '../auth/guards/jwt_auth_admin.guard';
import { Product } from './products.model';

@ApiTags('Products')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @ApiOperation({ summary: 'Create product' })
  @ApiResponse({ status: 200, type: () => Product })
  @UseGuards(JwtAuthAdminGuard)
  @Post('/')
  create(@Body() dto: CreateProductDto) {
    return this.productsService.create(dto);
  }

  @ApiOperation({ summary: 'Update product' })
  @ApiResponse({ status: 200, type: () => Product })
  @UseGuards(JwtAuthAdminGuard)
  @Put('/:id')
  update(@Body() dto: UpdateProductDto, @Param('id') id: number) {
    return this.productsService.update(id, dto);
  }

  @ApiOperation({ summary: 'Get all product' })
  @ApiResponse({ status: 200, type: () => [Product] })
  @Get('/')
  getAll() {
    return this.productsService.getAll();
  }

  @ApiOperation({ summary: 'Get product by id' })
  @ApiResponse({ status: 200, type: () => Product })
  @Get('/:id')
  getById(@Param('id') id: number) {
    return this.productsService.getById(id);
  }
}
