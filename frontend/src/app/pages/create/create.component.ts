import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ProductService } from '../../services/product/product.service';
import { Router } from '@angular/router';
import { FormsComponent } from '../../components/forms/forms.component';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    CommonModule,
    MatButtonModule,
    FormsComponent,
  ],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss',
})
export class CreateComponent implements OnInit {
  postForm: FormGroup;

  date = new Date();
  isDateValid: boolean;

  constructor(
    public productService: ProductService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.postForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      price: new FormControl(null, Validators.required),
      stock: new FormControl(null, Validators.required),
      validity: new FormControl(null, Validators.required),
    });
  }

  createProduct = () => {
    this.productService.createProduct(this.postForm.value).subscribe({
      next: () => this.router.navigate(['home']),
    });
  };
}
