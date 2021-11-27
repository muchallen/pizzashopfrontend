import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {CartComponent} from './cart/cart.component';
import { MenuComponent } from './menu/menu.component';
import { ServicesComponent } from './services/services.component';
const routes: Routes = [
   { path: 'cart', component: CartComponent },
  { path: '', component: HomeComponent },
   {path: 'checkout', component: MenuComponent },
   {path: 'services', component: ServicesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }