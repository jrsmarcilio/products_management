import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../models/product';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product/product.service';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatCardModule,
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  data: ProductModel[] = [];

  filterForm: FormGroup;

  constructor(
    private productService: ProductService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.getProducts();

    this.filterForm = new FormGroup({
      startDate: new FormControl(null),
      endDate: new FormControl(null),
    });
  }

  getProducts() {
    this.productService.getProducts().subscribe((data) => (this.data = data));
  }

  getProductsByDate() {
    const startDate = this.filterForm.get('startDate')?.value;
    const endDate = this.filterForm.get('endDate')?.value;

    if (startDate === '' && endDate === '') return this.getProducts();

    this.productService
      .filterBydate(startDate, endDate)
      .subscribe((data) => (this.data = data));
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe({
      next: () => this.getProducts(),
    });
  }

  navigate(id: number) {
    return this.router.navigate(['edit', id]);
  }
}
