import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { AdminsModule } from './admins/admins.module';
import { AuthModule } from './auth/auth.module';
import { Admin } from './admins/admins.model';
import { CategoriesModule } from './categories/categories.module';
import { Category } from './categories/categories.model';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      models: [Admin, Category],
      autoLoadModels: true,
    }),
    AdminsModule,
    AuthModule,
    CategoriesModule,
  ],
})
export class AppModule {}
