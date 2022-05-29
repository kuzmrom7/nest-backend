import { forwardRef, Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { JwtModule } from '@nestjs/jwt';
import { AuthModule } from '../auth/auth.module';
import { CategoriesModule } from '../categories/categories.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { Category } from '../categories/categories.model';
import { Product } from './products.model';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
  imports: [
    SequelizeModule.forFeature([Product]),
    JwtModule,
    forwardRef(() => AuthModule),
    forwardRef(() => CategoriesModule),
  ],
  exports: [ProductsService],
})
export class ProductsModule {}
