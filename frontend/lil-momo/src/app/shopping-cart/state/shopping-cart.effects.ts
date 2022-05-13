import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, concatMap } from 'rxjs';
import { Product } from 'src/app/models/product';
import { RimService } from 'src/app/services/rim.service';
import * as ShoppingCartActions from '../state/shopping-cart.actions';

@Injectable({providedIn: 'root'})
export class ShoppingCartEffects {
    constructor(private actions$ : Actions, private rimService : RimService ) { }
    /*
     * This effect is responsible for incrementing the total price after the customer adds a product in the cart
     */
    incrementTotaPrice$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ShoppingCartActions.addProductToCart),
            concatMap(action => {
                return this.rimService.getRimById(action.product.id).pipe(
                    map(rim => ShoppingCartActions.incrementTotalPriceInCart({ product: rim }))
                );
            })
        );
    });

    decrementTotalPrice$ = createEffect(()=> {
        return this.actions$.pipe(
            ofType(ShoppingCartActions.removeProductFromCart),
            concatMap(action => {
                return this.rimService.getRimById(action.product.id).pipe(
                    map(rim => ShoppingCartActions.decrementTotalPriceInCart({product : rim}))
                );
            })
        );
    })
}