import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { ProductModel } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeComponent implements OnInit {
  data: ProductModel[] = [];

  constructor(
    private productService: ProductService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct() {
    this.productService.getProducts().subscribe((data) => (this.data = data));
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe();
    window.location.reload();
  }

  navigate(id: number) {
    return this.router.navigate([`edit/${id}`]);
  }
}
