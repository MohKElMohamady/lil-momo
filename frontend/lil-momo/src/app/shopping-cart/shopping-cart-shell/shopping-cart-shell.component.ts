import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product, Product as string } from 'src/app/models/product';
import { ShoppingCartState } from '../state/shopping-cart.state';
import { Observable } from 'rxjs';
import { ProductToBePurchased } from 'src/app/models/product-to-be-purchased';
import * as ShoppingCartSelectors from '../state/shopping-cart.selectors';
import * as ShoppingCartActions from '../state/shopping-cart.actions';
@Component({
  selector: 'shopping-cart-shell',
  templateUrl: './shopping-cart-shell.component.html',
  styleUrls: ['./shopping-cart-shell.component.css']
})
export class ShoppingCartShellComponent implements OnInit {

  /*
   * This map/dictionary should be having all the product ids and their corresponding products
   */
  public productsToBePurchased$ : Observable<ProductToBePurchased[]>;
  public totalCostOfProducts$ : Observable<number>;
  
  constructor(private store : Store<ShoppingCartState>) { 
    this.productsToBePurchased$ = this.store.select(ShoppingCartSelectors.selectProductsAndTheirQuantaties);
    this.totalCostOfProducts$ = this.store.select(ShoppingCartSelectors.selectTotalCostOfProducts);
  }

  ngOnInit(): void {
  }

  public addProductIntoCart(product : Product) {
    console.log(`add product from shell ${product}`);
    this.store.dispatch(ShoppingCartActions.addProductToCart({product}));
  }

  public removeProductFromCart(product : Product) {
    console.log(`remove product from shell ${product}`);
    this.store.dispatch(ShoppingCartActions.removeProductFromCart({product}));
  }
}
