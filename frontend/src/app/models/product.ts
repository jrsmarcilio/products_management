export class ProductModel {
  id?: number;
  price: number;
  stock: number;
  name: string;
  validity: Date | string;

  constructor(product: ProductModel) {
    const { name, price, stock, validity } = product;

    this.price = price;
    this.stock = stock;
    this.name = name;
    this.validity = validity;
  }
}
