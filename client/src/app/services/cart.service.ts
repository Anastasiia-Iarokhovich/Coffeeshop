import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartVisible = new BehaviorSubject<boolean>(false);
  cartVisible$ = this.cartVisible.asObservable();

  constructor() { }

  toggleCart() {
    this.cartVisible.next(!this.cartVisible.value);
  }

  hideCart() {
    this.cartVisible.next(false);
  }
}
