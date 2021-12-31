import { Component, OnInit } from '@angular/core';
import {ProductService} from "../service/product.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {Product} from "../model/product";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {

  product: Product | null = {
    id: 0,
    name: '',
    price:0,
    description:'',
  }

  id: number = 0;

  constructor(
    private productService: ProductService,
    private activeRouter: ActivatedRoute,
  ) {
    activeRouter.paramMap.subscribe((paraMap: ParamMap) =>{
      this.id = Number(paraMap.get('id'));
      this.product = this.getProductById(this.id);
    })
  }

  ngOnInit(): void {
  }


  private getProductById(id: number) {
    return this.productService.getById(id);
  }

  onSubmit() {
    if (this.product){
      this.productService.updateProduct(this.product);
      alert("Update is success!");
    }
  }
}
