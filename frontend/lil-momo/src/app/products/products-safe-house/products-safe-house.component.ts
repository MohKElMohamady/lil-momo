import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Color } from 'src/app/models/color';
import { Manufacturer } from 'src/app/models/manufacturer';
import { Product } from 'src/app/models/product';
import { Type } from 'src/app/models/product-type';

@Component({
  selector: 'products-safe-house',
  templateUrl: './products-safe-house.component.html',
  styleUrls: ['./products-safe-house.component.css']
})
export class ProductsSafeHouseComponent implements OnInit {

  @Input()
  public products! : Product[] | null;
  @Output()
  public addProductIntoCartEvent : EventEmitter<Product> = new EventEmitter<Product>();
  @Output()
  public removeProductFromCartEvent : EventEmitter<Product> = new EventEmitter<Product>();
  @Output()
  public showProduct : EventEmitter<Product> = new EventEmitter<Product>();

  constructor() { }

  ngOnInit(): void {
  }

  public displayProduct(product : Product) {
    console.log(`display product from safehouse ${product}`);
    this.showProduct.emit(product);
  }

  public addProductIntoCart(product : Product) {
    console.log(`add product from safehouse ${product}`);
    this.addProductIntoCartEvent.emit(product);
  }

  public removeProductFromCart(product : Product) {
    console.log(`remove product from safehouse ${product}`);
    this.removeProductFromCartEvent.emit(product);
  }

  
}
