import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coffee-list',
  templateUrl: './coffee-list.component.html',
  styleUrls: ['./coffee-list.component.css']
})
export class CoffeeListComponent implements OnInit {

  private accountService: AccountService;
  private router: Router;
  loggedIn = false;

  coffees = [
    {
      name: 'Creamy Coffee',
      price: 15.99,
      image: './assets/images/cof1.png'
    },
    {
      name: 'Espresso',
      price: 9.99,
      image: './assets/images/cof2.png'
    },
    {
      name: 'Cappuccino',
      price: 12.49,
      image: './assets/images/cof3.png'
    },
    {
      name: 'Latte',
      price: 13.75,
      image: './assets/images/cof4.png'
    }
  ];

  constructor(accountService: AccountService, router: Router) 
  { 
    this.accountService = accountService;
    this.router = router;
  }

  ngOnInit(): void {
    this.accountService.loggedIn$.subscribe(loggedIn => {
      this.loggedIn = loggedIn;
      if (!this.loggedIn) {
        this.router.navigate(['']);
      }
    });

    // document.body.style.backgroundColor = '#5C4747';  
  }

  // ngOnDestroy(): void {
  //   document.body.style.backgroundColor = '';
  // }

}
