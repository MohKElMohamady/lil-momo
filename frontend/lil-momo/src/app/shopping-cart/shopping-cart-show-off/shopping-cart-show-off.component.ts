import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductToBePurchased } from 'src/app/models/product-to-be-purchased';

@Component({
  selector: 'shopping-cart-show-off',
  templateUrl: './shopping-cart-show-off.component.html',
  styleUrls: ['./shopping-cart-show-off.component.css']
})
export class ShoppingCartShowOffComponent implements OnInit {

  @Input()
  public productsToBePurchased! : ProductToBePurchased[] | null;
  @Input()
  public totalCostOfProducts! : number | null;
  @Output()
  public addProductIntoCartEvent : EventEmitter<Product> = new EventEmitter<Product>();
  @Output()
  public removeProductFromCartEvent : EventEmitter<Product> = new EventEmitter<Product>();

  constructor() { }

  ngOnInit(): void {
  }

  public addProductIntoCart(product : Product) {
    console.log(`add product from card ${product}`);
    this.addProductIntoCartEvent.emit(product);
  }

  public removeProductFromCart(product : Product) {
    console.log(`remove product from card ${product}`);
    this.removeProductFromCartEvent.emit(product);
  }
}
