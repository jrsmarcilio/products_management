export class ProductModel {
  id: number;
  price: number;
  stock: number;
  name: string;
  validity: Date;

  constructor(
    id: number,
    price: number,
    stock: number,
    name: string,
    validity: string
  ) {
    this.id = id;
    this.price = price;
    this.stock = stock;
    this.name = name;
    this.validity = new Date(validity);
  }
}
