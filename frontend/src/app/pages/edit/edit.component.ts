import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductModel } from '../../models/product';
import { MatButtonModule } from '@angular/material/button';
import { ProductService } from '../../services/product/product.service';
import { DateChecksService } from '../../services/dateChecks/date-checks.service';
import { FormsComponent } from '../../components/forms/forms.component';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    CommonModule,
    MatButtonModule,
    FormsComponent,
  ],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss',
})
export class EditComponent implements OnInit {
  postForm: FormGroup;

  id: number;
  product: ProductModel;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    public dateChecks: DateChecksService
  ) {
    this.postForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      stock: ['', [Validators.required, Validators.min(0)]],
      validity: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.id = Number(id);

    this.getProductById(this.id);
  }

  getProductById(id: number) {
    this.productService.getProductById(id).subscribe((product) => {
      const { name, price, stock, validity } = product;
      const [date] = validity.toString().split('T');
      const [yyyy, mm, dd] = date.split('-');

      this.product = new ProductModel(product);
      this.postForm.patchValue({
        name,
        price,
        stock,
        validity: `${mm}-${dd}-${yyyy}`,
      });
    });
  }

  editProduct = () => {
    if (this.postForm.valid) {
      this.productService
        .updateProduct(this.id, this.postForm.value)
        .subscribe();
      this.router.navigate(['home']);
    }
  };
}
