import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { ShoppingCartSmallComponent } from './shopping-cart-small/shopping-cart-small.component';
import { ShoppingCartShellComponent } from './shopping-cart-shell/shopping-cart-shell.component';
import { ShoppingCartShowOffComponent } from './shopping-cart-show-off/shopping-cart-show-off.component';
import { EffectsModule } from '@ngrx/effects';
import { ShoppingCartEffects } from './state/shopping-cart.effects';
import { shoppingCartReducers } from './state/shopping-cart.reducers';


@NgModule({
  declarations: [
    ShoppingCartSmallComponent,
    ShoppingCartShellComponent,
    ShoppingCartShowOffComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature("shoppingCart", shoppingCartReducers),
    EffectsModule.forFeature([ShoppingCartEffects])
  ]
})
export class ShoppingCartModule { }
