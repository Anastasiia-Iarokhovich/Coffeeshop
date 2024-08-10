import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { CartService } from '../services/cart.service';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  private cartService: CartService
  private accountService: AccountService;
  cartVisible = false;
  loggedIn = false;

  constructor(cartService: CartService, accountService: AccountService) 
  { 
    this.cartService = cartService;
    this.accountService = accountService;
  }

  ngOnInit(): void {
    this.cartService.cartVisible$.subscribe(visible => {
      this.cartVisible = visible;
    });

    this.accountService.loggedIn$.subscribe(loggedIn => {
      this.loggedIn = loggedIn;
    });
  }

}
