import { Injectable } from '@nestjs/common';
import { BaseRepository } from './baseRepo';
import { Product } from '../entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, Repository } from 'typeorm';

@Injectable()
export class ProductRepo extends BaseRepository<Product> {
  constructor(
    @InjectRepository(Product) private readonly userRepo: Repository<Product>,
  ) {
    super(userRepo);
  }

  async filterByDate(startDate: Date, endDate: Date): Promise<Product[]> {
    return await this.userRepo.find({
      where: {
        validity: Between(startDate, endDate),
      },
    });
  }
}
