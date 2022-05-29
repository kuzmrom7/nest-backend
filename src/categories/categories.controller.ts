import { Body, Controller, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create_category.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Category } from './categories.model';
import { JwtAuthAdminGuard } from '../auth/guards/jwt_auth_admin.guard';

@ApiTags('Categories')
@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @ApiOperation({ summary: 'Get all categories' })
  @ApiResponse({ status: 200, type: [Category] })
  @Get('/')
  getAll() {
    return this.categoriesService.getAll();
  }

  @ApiOperation({ summary: 'Get category by id' })
  @ApiResponse({ status: 200, type: Category })
  @Get('/:id')
  getById(@Param('id') id: number) {
    return this.categoriesService.getById(id);
  }

  @ApiOperation({ summary: 'Create category' })
  @ApiResponse({ status: 200, type: Category })
  @UseGuards(JwtAuthAdminGuard)
  @Post('/')
  create(@Body() dto: CreateCategoryDto) {
    return this.categoriesService.create(dto);
  }

  @ApiOperation({ summary: 'Update category' })
  @ApiResponse({ status: 200, type: Category })
  @UseGuards(JwtAuthAdminGuard)
  @Put('/:id')
  update(@Body() dto: CreateCategoryDto, @Param('id') id: number) {
    return this.categoriesService.update(id, dto);
  }
}
