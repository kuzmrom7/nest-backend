import { forwardRef, Module } from '@nestjs/common';
import { AdminsController } from './admins.controller';
import { AdminsService } from './admins.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Admin } from './admins.model';
import { AuthModule } from '../auth/auth.module';
import { JwtModule } from "@nestjs/jwt";

@Module({
  controllers: [AdminsController],
  providers: [AdminsService],
  imports: [SequelizeModule.forFeature([Admin]), forwardRef(() => AuthModule), JwtModule],
  exports: [AdminsService],
})
export class AdminsModule {}
