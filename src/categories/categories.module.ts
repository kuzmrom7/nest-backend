import { forwardRef, Module } from "@nestjs/common";
import { CategoriesService } from "./categories.service";
import { CategoriesController } from "./categories.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { Category } from "./categories.model";
import { JwtModule } from "@nestjs/jwt";
import { AuthModule } from "../auth/auth.module";

@Module({
  controllers: [CategoriesController],
  providers: [CategoriesService],
  imports: [SequelizeModule.forFeature([Category]), JwtModule, forwardRef(() => AuthModule)],
  exports: [CategoriesService]
})
export class CategoriesModule {
}
