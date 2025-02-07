import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { AccountService } from './services/account.service';
import { CoffeeCardComponent } from './coffee-card/coffee-card.component';
import { CartComponent } from './cart/cart.component';
import { CartService } from './services/cart.service';
import { RouterModule } from '@angular/router';
import { CoffeeListComponent } from './coffee-list/coffee-list.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    FooterComponent,
    CoffeeCardComponent,
    CartComponent,
    CoffeeListComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ],
  providers: [HttpClient, AccountService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
