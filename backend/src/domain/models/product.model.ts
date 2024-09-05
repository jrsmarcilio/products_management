import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class ProductModel {
  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsNotEmpty()
  @IsNumber()
  stock: number;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsDate()
  validity: Date;
}
