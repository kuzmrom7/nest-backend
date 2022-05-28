import { Controller, Get, UseGuards, Req, Request } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Admin } from './admins.model';
import { AdminsService } from './admins.service';
import { JwtAuthAdminGuard } from '../auth/guards/jwt_auth_admin.guard';

@ApiTags('Admins')
@Controller('admins')
export class AdminsController {
  constructor(private adminService: AdminsService) {}

  @ApiOperation({ summary: 'Get user' })
  @ApiResponse({ status: 200, type: Admin })
  @UseGuards(JwtAuthAdminGuard)
  @Get('/')
  get(@Req() req: any) {
    return this.adminService.get(req?.admin.id);
  }
}
