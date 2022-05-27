import { ApiProperty } from '@nestjs/swagger';

export class AuthOutputDto {
  @ApiProperty({ example: 'eyJpZCI6MSwiZW1haWwiOiJrdXptcm9tN0BnbWFpbC5jb20iLCJpYXQiOjE2NTM2Nzk2ODEsImV4cCI6MTY1Mzc2NjA4MX0', description: 'JWT Token' })
  readonly token: string;
}
