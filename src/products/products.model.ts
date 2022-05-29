import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { Category } from '../categories/categories.model';

interface ProductCreationAttrs {
  name: string;
  slug: string;
  description: string;
  categoryId: number;
}

@Table({ tableName: 'products' })
export class Product extends Model<Product, ProductCreationAttrs> {
  @ApiProperty({ example: '1234', description: 'Unique id' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'Name-1', description: 'Name of product' })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  name: string;

  @ApiProperty({ example: 'all-of-them', description: 'Slug for product' })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  slug: string;

  @ApiProperty({ example: 'Example of description', description: 'Product description' })
  @Column({ type: DataType.STRING, unique: false, allowNull: true })
  description: string;

  @ApiProperty({ example: 3, description: 'Category id' })
  @ForeignKey(() => Category)
  @Column({ type: DataType.INTEGER })
  categoryId: number;

  @ApiProperty({ type: () => Category, description: 'Category' })
  @BelongsTo(() => Category)
  category: Category;
}
