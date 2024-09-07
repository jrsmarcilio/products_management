import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from '../../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  url = import.meta.env.NG_APP_BASE_URL;
  constructor(private http: HttpClient) {}

  getProducts(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(this.url);
  }

  getProductById(id: number): Observable<ProductModel> {
    return this.http.get<ProductModel>(`${this.url}${id}`);
  }

  createProduct(data: ProductModel): Observable<ProductModel> {
    return this.http.post<ProductModel>(this.url, data);
  }

  updateProduct(id: number, data: ProductModel) {
    return this.http.patch(`${this.url}${id}`, { ...data });
  }

  deleteProduct(id: number) {
    return this.http.delete(`${this.url}${id}`);
  }

  filterBydate(startDate: string, endDate: string): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(
      `${this.url}filter/${startDate}/${endDate}`
    );
  }
}
