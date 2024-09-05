import { Injectable } from '@nestjs/common';
import { Product } from 'src/infra/database/entities/product.entity';
import { ProductRepo } from 'src/infra/database/repositories/product.repo';
import { FindManyOptions } from 'typeorm';

@Injectable()
export class ProductUseCases {
  constructor(private readonly productRepo: ProductRepo) {}

  async findAll(options?: FindManyOptions<Product>): Promise<Product[]> {
    return await this.productRepo.findAll(options);
  }

  async findOneById(id: number): Promise<Product> {
    const product = await this.productRepo.findOneById(id);
    return product;
  }

  async create(data: Product): Promise<Product> {
    const product = await this.productRepo.create(data);
    return product;
  }

  async update(id: number, data: Product): Promise<Product> {
    let product = await this.productRepo.findOneById(id);

    product = { ...data };

    return await this.productRepo.update(id, product);
  }

  async delete(id: number): Promise<{ deleted: boolean }> {
    return await this.productRepo.delete(id);
  }
}
