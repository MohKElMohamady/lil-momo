import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductsShellComponent } from './products/products-shell/products-shell.component';
import { ProductCardComponent } from './products/product-card/product-card.component';
import { ProductsModule } from './products/products.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryRimService } from './services/in-memory-rim-data.service';
import { ShoppingCartModule } from './shopping-cart/shopping-cart.module';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductsModule,
    ShoppingCartModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryRimService),
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({})
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
