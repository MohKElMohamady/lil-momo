import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ProductsState } from '../state/products.state';
import { Product } from 'src/app/models/product';
import { Observable } from 'rxjs';
import * as ProductsSelectors from '../state/products.selectors';
@Component({
  selector: 'app-product-container',
  templateUrl: './product-container.component.html',
  styleUrls: ['./product-container.component.css']
})
export class ProductContainerComponent implements OnInit {

  public selectedProduct$! : Observable<Product | undefined>;

  constructor(private store: Store<ProductsState>, private route: ActivatedRouteSnapshot) {
    this.route.queryParamMap
    let selectedProductId = route.paramMap.get('id');
    this.selectedProduct$ = this.store.select(ProductsSelectors.productSelector((selectedProductId as string)));
    console.log("Hello from product");
  }
  ngOnInit(): void {
  }

}
