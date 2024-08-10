import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CartService } from '../services/cart.service';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  private cartService: CartService
  private accountService: AccountService;

  loggedIn = false;
  username: string | null = null;

  constructor(cartService: CartService, accountService: AccountService) 
  {
    this.cartService = cartService;
    this.accountService = accountService;
  }

  ngOnInit(): void {
    this.accountService.loggedIn$.subscribe(loggedIn => {
      this.loggedIn = loggedIn;
    });

    this.accountService.username$.subscribe(username => {
      this.username = username;
    });
  }

  toggleCart() {
    this.cartService.toggleCart();
  }

  logout() {
    this.accountService.logout();
  }
}
