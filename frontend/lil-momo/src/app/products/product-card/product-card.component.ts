import { Component, EventEmitter, Input, OnInit, Output, } from '@angular/core';
import { Color } from 'src/app/models/color';
import { Manufacturer } from 'src/app/models/manufacturer';
import { Product } from 'src/app/models/product';
import { Type } from 'src/app/models/product-type';
import { Rim } from 'src/app/models/rim';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input()
  public product! : Product;
  @Output()
  public addProductIntoCartEvent : EventEmitter<Product> = new EventEmitter<Product>();
  @Output()
  public removeProductFromCartEvent : EventEmitter<Product> = new EventEmitter<Product>();
  @Output()
  public showProduct : EventEmitter<Product> = new EventEmitter<Product>();

  constructor() { }

  ngOnInit(): void {
  }

  public displayProduct() {
    console.log(`display product from card ${this.product}`);
    this.showProduct.emit(this.product);
  }

  public addProductIntoCart() {
    console.log(`add product from card ${this.product}`);
    this.addProductIntoCartEvent.emit(this.product);
  }

  public removeProductFromCart() {
    console.log(`remove product from card ${this.product}`);
    this.removeProductFromCartEvent.emit(this.product);
  }

}
