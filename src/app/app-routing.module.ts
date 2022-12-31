import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './component/cart/cart.component';
import { LoginComponent } from './component/login/login.component';
import { ProductsListComponent } from './component/products-list/products-list.component';
import { RegisterComponent } from './component/register/register.component';

const routes: Routes = [
  {path:"products",component:ProductsListComponent},
  {path:"cart",component:CartComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
