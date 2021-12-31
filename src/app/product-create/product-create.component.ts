import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../service/product.service";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  rfCreateForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl(null, [Validators.required, Validators.minLength(7)]),
    price: new FormControl(null, [Validators.required]),
    description: new FormControl(null, [Validators.required])
  });
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.rfCreateForm.value.id = this.productService.products.length+1;
    this.productService.save(this.rfCreateForm.value);
    console.log(this.rfCreateForm.value);
    this.rfCreateForm.reset();

  }
}
