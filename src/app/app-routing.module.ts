import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './component/sign-in/sign-in.component';
import { AdvertisementComponent } from './component/advertisement/advertisement.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { HomeComponent } from './component/home/home.component';
import { ProductsComponent } from './component/products/products.component';
import { ChooseProductComponent } from './component/choose-product/choose-product.component';
import { RouteComponent } from './component/route/route.component';
import { ProductComponent } from './component/product/product.component';
import { AvgBuyOfUserComponent } from './component/avg-buy-of-user/avg-buy-of-user.component';


export const routes: Routes=[
  {path: 'sign-in', component:SignInComponent},
  {path: 'sign-Up', component:SignUpComponent},
  {path: 'advertisement', component:AdvertisementComponent},
  {path: 'home', component:HomeComponent},
  {path: 'products', component:ProductsComponent},
  {path: 'choose-product', component:ChooseProductComponent},
  {path: 'route/:items', component:RouteComponent},
  {path: 'product', component: ProductComponent},
  {path: 'avg-buy-of-user/:ListOfRoute', component:AvgBuyOfUserComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
