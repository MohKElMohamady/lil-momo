import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import * as ProductsSelectors from '../state/products.selectors';
import * as ProductsActions from '../state/products.actions';
import { ProductsState } from '../state/products.state';

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

}
