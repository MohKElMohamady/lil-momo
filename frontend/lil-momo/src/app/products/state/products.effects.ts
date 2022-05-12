import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs';
import { Product } from 'src/app/models/product';
import { RimService } from 'src/app/services/rim.service';
import * as ProductsActions from '../state/products.actions';
@Injectable({ providedIn: 'root' })
export class ProductsEffects {
  constructor(private actions$: Actions, private rimsSerivce: RimService) {}

  public loadProducts = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductsActions.initializeProducts),
      mergeMap(() => {
        return this.rimsSerivce.getRims().pipe(
          map((rims) => {
            return ProductsActions.loadProducts({ products: rims });
          })
        );
      })
    );
  });
}
