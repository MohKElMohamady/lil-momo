import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ShoppingCartState } from '../state/shopping-cart.state';
import * as ShoppingCartSelectors from '../state/shopping-cart.selectors';

@Component({
  selector: 'mini-shopping-cart',
  templateUrl: './mini-shopping-cart.component.html',
  styleUrls: ['./mini-shopping-cart.component.css']
})
export class MiniShoppingCartComponent implements OnInit {

  public totalProductsInCart$ : Observable<number>;

  constructor(private store : Store<ShoppingCartState>) {
    this.totalProductsInCart$ = this.store.select(ShoppingCartSelectors.selectTotalProductsInCart);
   }

  ngOnInit(): void {
  }

}
