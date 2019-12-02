import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminUsersComponent } from './admin/admin-users/admin-users.component';
import { ProductsComponent } from './products/products.component';
import { SigninComponent } from './users/signin/signin.component';
import { SignupComponent } from './users/signup/signup.component';
import { CartComponent } from './products/cart/cart.component';
import { UsersComponent } from './users/users.component';


const routes: Routes = [
  {path: '', component: UsersComponent },
    {path: 'user', component:UsersComponent,
      children:[
        {path: '', component:SigninComponent},
        {path: 'signin', component:SigninComponent},
        {path: 'signup', component:SignupComponent}
      ] },
  {path: '', component:ProductsComponent,
    children: [{ path:'cart', component:CartComponent }]
  },
  {path: 'admin', component:AdminComponent,
    children:[
      {path: 'products', component:AdminProductsComponent},
      {path: 'users', component: AdminUsersComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
