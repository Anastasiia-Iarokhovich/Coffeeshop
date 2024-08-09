import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  private cartService: CartService

  constructor(cartService: CartService) 
  {
    this.cartService = cartService;
  }

  ngOnInit(): void {
  }

  toggleCart() {
    this.cartService.toggleCart();
  }

}
