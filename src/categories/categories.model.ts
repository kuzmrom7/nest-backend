import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';

interface CategoryCreationAttrs {
  name: string;
  slug: string;
}

@Table({ tableName: 'categories' })
export class Category extends Model<Category, CategoryCreationAttrs> {
  @ApiProperty({ example: '1234', description: 'Unique id' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'Category-1', description: 'Name of category' })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  name: string;

  @ApiProperty({ example: 'all-of-them', description: 'Slug for category' })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  slug: string;
}
