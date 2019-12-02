# EPharmacy

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.20.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
# E-pharmacy


# to add routing add the routs to the app-routing.module.ts
# also import the components in app-routing.module.ts


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

