import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { ShoppingCartShellComponent } from './shopping-cart-shell/shopping-cart-shell.component';
import { ShoppingCartShowOffComponent } from './shopping-cart-show-off/shopping-cart-show-off.component';
import { EffectsModule } from '@ngrx/effects';
import { ShoppingCartEffects } from './state/shopping-cart.effects';
import { shoppingCartReducers } from './state/shopping-cart.reducers';
import { MiniShoppingCartComponent } from './mini-shopping-cart/mini-shopping-cart.component';
import { Route, RouterModule, Routes } from '@angular/router';

const routes : Routes = [
  {path : '', component : ShoppingCartShellComponent},
]

@NgModule({
  declarations: [
    ShoppingCartShellComponent,
    ShoppingCartShowOffComponent,
    MiniShoppingCartComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature("shoppingCart", shoppingCartReducers),
    EffectsModule.forFeature([ShoppingCartEffects]),
    RouterModule.forChild(routes)
  ],
  exports : [
    MiniShoppingCartComponent,
    ShoppingCartShellComponent
  ]
})
export class ShoppingCartModule { }
