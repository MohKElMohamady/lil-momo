import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import * as ProductsSelectors from '../state/products.selectors';
import * as ProductsActions from '../state/products.actions';
import { ProductsState } from '../state/products.state';
import * as ShoppingCartActions from '../../shopping-cart/state/shopping-cart.actions';
import * as ShoppingCartSelectors from '../../shopping-cart/state/shopping-cart.selectors';
@Component({
  selector: 'products-shell',
  templateUrl: './products-shell.component.html',
  styleUrls: ['./products-shell.component.css']
})
export class ProductsShellComponent implements OnInit {
  
  public products$!: Observable<Product[]>;
  
  constructor(private store : Store<ProductsState>) { 
    this.store.dispatch(ProductsActions.initializeProducts());
    this.products$ = this.store.select(ProductsSelectors.productsSelector);
  }

  ngOnInit(): void {

  }

  public displayProduct(product : Product) {
    console.log(`display product from shell ${product}`);
    
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
