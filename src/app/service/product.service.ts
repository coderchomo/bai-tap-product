import { Injectable } from '@angular/core';
import {Product} from "../model/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [
    {
      id: 1,
      name: 'IPhone 12',
      price: 240000,
      description: 'New'
    }, {
      id: 2,
      name: 'IPhone 11',
      price: 1560000,
      description: 'Like new'
    }, {
      id: 3,
      name: 'IPhone X',
      price: 968000,
      description: '97%'
    }, {
      id: 4,
      name: 'IPhone 8',
      price: 7540000,
      description: '98%'
    }, {
      id: 5,
      name: 'IPhone 11 Pro',
      price: 1895000,
      description: 'Like new'
    }
  ]
  constructor() { }

  getAll() {
    return this.products;
  }
  save(product: Product) {
    this.products.push(product);
  }
  getById(id: number): Product|null {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id == id){
        return this.products[i];
      }
    }
    return null;
  }

  updateProduct(product: Product) {
    for (let i = 0; i < this.products.length; i++) {
        if (this.products[i].id == product.id){
          this.products[i] = product;
      }
    }
  }

  removeById(id: number) {
    let index = -1;
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id == id) {
        index = i
      }
    }
    this.products.splice(index,1);
  }
}
