import { Component, OnInit, inject } from '@angular/core';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private accountService: AccountService;

  model: any = {};

  constructor(accountService: AccountService) 
  { 
    this.accountService = accountService;
  }

  ngOnInit(): void {
  }

  login() {
    this.accountService.login(this.model).subscribe({
      next: response => {
        console.log('Login erfolgreich', response);
      },
      error: error => console.log('Login fehlgeschlagen', error)
    });
  }
}
