import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateCategoryDto {
  @ApiProperty({ example: 'Category-1', description: 'Name of category' })
  @IsString()
  readonly name: string;

  @ApiProperty({ example: 'all-of-them', description: 'Slug for category' })
  @IsString()
  readonly slug: string;
}
