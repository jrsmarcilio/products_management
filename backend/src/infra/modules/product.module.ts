import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from '../database/entities/product.entity';
import { ProductController } from 'src/presentation/controllers/product/product.controller';
import { ProductUseCases } from 'src/application/useCases/product.useCases';
import { ProductRepo } from '../database/repositories/product.repo';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  controllers: [ProductController],
  providers: [ProductUseCases, ProductRepo],
  exports: [ProductUseCases],
})
export class ProductModule {}
