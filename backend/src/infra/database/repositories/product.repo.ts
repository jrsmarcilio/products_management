import { Injectable } from '@nestjs/common';
import { BaseRepository } from './baseRepo';
import { Product } from '../entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProductRepo extends BaseRepository<Product> {
  constructor(
    @InjectRepository(Product) private readonly userRepo: Repository<Product>,
  ) {
    super(userRepo);
  }
}
