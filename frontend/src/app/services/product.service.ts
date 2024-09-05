import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  url = 'http://localhost:3000/api/product/';
  constructor(private http: HttpClient) {}

  getProducts(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(this.url);
  }

  getProductById(id: number): Observable<ProductModel> {
    return this.http.get<ProductModel>(`${this.url}${id}`);
  }

  createProduct(data: ProductModel): void {
    this.http.post(this.url, data);
  }

  updateProduct(id: number, data: ProductModel) {
    return this.http.put(`${this.url}${id}`, { ...data });
  }

  deleteProduct(id: number) {
    return this.http.delete(`${this.url}${id}`);
  }
}
