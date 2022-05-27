import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

export class CreateAdminDto {
  @ApiProperty({ example: 'test@test.com', description: 'User email' })
  @IsEmail()
  readonly email: string;

  @ApiProperty({ example: 'password', description: 'User password' })
  @IsString()
  @Length(4, 16)
  readonly password: string;
}
