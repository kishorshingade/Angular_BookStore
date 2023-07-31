import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { BooksComponent } from './components/books/books.component';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  {path:"header", component:HeaderComponent},
  {path:"books", component:BooksComponent},
  {path:"cart", component:CartComponent},
  {path:"", component:LoginComponent},
  {path:"signup", component:SignupComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
