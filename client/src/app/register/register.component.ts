import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private accountService: AccountService
  
  model: any = {};

  constructor(accountService: AccountService) 
  { 
    this.accountService = accountService;
  }

  ngOnInit(): void {
  }

  register() {
    this.accountService.register(this.model).subscribe(response => {
      console.log('Registration successful');
    }, error => {
      console.log('Registration failed', error);
    });
  }
}
