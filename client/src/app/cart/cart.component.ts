import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  private cartService: CartService
  cartVisible = false;

  constructor(cartService: CartService) 
  { 
    this.cartService = cartService;
  }

  ngOnInit(): void {
    this.cartService.cartVisible$.subscribe(visible => {
      this.cartVisible = visible;
    });
  }

}
