import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsShellComponent } from './products-shell/products-shell.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductsSafeHouseComponent } from './products-safe-house/products-safe-house.component';
import { StoreModule } from '@ngrx/store';
import { productsReducer } from './state/products.reducers';
import { EffectsModule } from '@ngrx/effects';
import { ProductsEffects } from './state/products.effects';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtools } from '@ngrx/store-devtools';
import { RouterModule, Routes } from '@angular/router';
import { ProductContainerComponent } from './product-container/product-container.component';

const routes : Routes = [
  {path : '', component : ProductsShellComponent}
];

@NgModule({
  
  declarations: [
    ProductsShellComponent,
    ProductCardComponent,
    ProductsSafeHouseComponent,
    ProductContainerComponent
  ],
  exports : [],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature("products", productsReducer),
    EffectsModule.forFeature([ProductsEffects]),
    RouterModule.forChild(routes)  
  ],
  
})
export class ProductsModule { }
