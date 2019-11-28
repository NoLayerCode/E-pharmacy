import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminUsersComponent } from './admin/admin-users/admin-users.component';
import { ProductsComponent } from './products/products.component';
import { ProductServicesComponent } from './products/product-services/product-services.component';
import { CartServicesComponent } from './products/product-services/cart-services/cart-services.component';
import { CartComponent } from './products/cart/cart.component';
import { UsersComponent } from './users/users.component';
import { ServicesComponent } from './users/services/services.component';
import { UserServicesComponent } from './users/services/user-services/user-services.component';
import { SignInComponent } from './users/sign-in/sign-in.component';
import { SignUpComponent } from './users/sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AdminProductsComponent,
    AdminUsersComponent,
    ProductsComponent,
    ProductServicesComponent,
    CartServicesComponent,
    CartComponent,
    UsersComponent,
    ServicesComponent,
    UserServicesComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
