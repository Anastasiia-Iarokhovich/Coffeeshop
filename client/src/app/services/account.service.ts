import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private http: HttpClient; 
  private router: Router;

  private loggedInSubject = new BehaviorSubject<boolean>(false);
  loggedIn$ = this.loggedInSubject.asObservable();

  private usernameSubject = new BehaviorSubject<string | null>(null);
  username$ = this.usernameSubject.asObservable();

  baseUrl = 'http://localhost:5001/';

  constructor(http: HttpClient, router: Router) 
  { 
    this.http = http;
    this.router = router;
  }
  
  login(model: any): Observable<any> {
    return this.http.post<User>(this.baseUrl + 'account/login', model).pipe(
      map(response => {
        if (response) {
          this.loggedInSubject.next(true);  // Sets loggedIn to true after successful login
          this.usernameSubject.next(response.username);
          localStorage.setItem('authToken', response.token);
          this.router.navigate(['/coffee-list']);
        }
        return response;
      })
    );
  }

  logout() {
    this.loggedInSubject.next(false);  // Sets loggedIn to false on logout
    this.usernameSubject.next(null);
    localStorage.removeItem('authToken');
    this.router.navigate(['']);
  }

  register(model: any): Observable<any> {
    return this.http.post<User>(this.baseUrl + 'account/register', model).pipe(
      map(response => {
        if (response) {
          this.loggedInSubject.next(true);  // Sets loggedIn to true after successful registration
          this.usernameSubject.next(response.username);
          localStorage.setItem('authToken', response.token);
          this.router.navigate(['/coffee-list']);  // Navigates to coffee-list after successful registration
        }
        return response;
      })
    );
  }
}
