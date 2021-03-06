import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {path : "home", component : HomeComponent},
  {path : "products", loadChildren : () => import('./products/products.module').then(m => m.ProductsModule)},
  {path : "cart", loadChildren : () => import('./shopping-cart/shopping-cart.module').then(m => m.ShoppingCartModule)},
  {path : "contact", component : ContactComponent},
  {path : "", redirectTo : "home", pathMatch : "full"},
  {path : "**", component :  PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
