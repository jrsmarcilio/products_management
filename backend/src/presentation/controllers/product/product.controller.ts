import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ProductUseCases } from 'src/application/useCases/product.useCases';
import { Product } from 'src/infra/database/entities/product.entity';

@Controller('product')
export class ProductController {
  constructor(private readonly productUseCases: ProductUseCases) {}

  @Get()
  async findAll(): Promise<Product[]> {
    return await this.productUseCases.findAll();
  }

  @Get(':id')
  async findOneById(@Param('id') id: number): Promise<Product> {
    return await this.productUseCases.findOneById(id);
  }

  @Post()
  async create(@Body() data: Product): Promise<Product> {
    return await this.productUseCases.create({
      validity: new Date(data.validity),
      ...data,
    });
  }

  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() data: Product,
  ): Promise<Product> {
    return await this.productUseCases.update(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<{ deleted: boolean }> {
    return await this.productUseCases.delete(id);
  }

  @Get('filter/:startDate/:endDate')
  async filterByDate(
    @Param('startDate') startDate: string,
    @Param('endDate') endDate: string,
  ): Promise<Product[]> {
    if (!startDate || !endDate) throw new BadRequestException('cadê as datas');

    return await this.productUseCases.filterByDate(
      new Date(startDate),
      new Date(endDate),
    );
  }
}
