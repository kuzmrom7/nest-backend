import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class UpdateProductDto {
  @ApiProperty({ example: 'The product name', description: 'Name of product' })
  @IsString()
  readonly name: string;

  @ApiProperty({ example: 'this-product', description: 'Slug for product' })
  @IsString()
  readonly slug: string;

  @ApiProperty({ example: 'Example of description', description: 'Product description' })
  @IsString()
  readonly description: string;
}
