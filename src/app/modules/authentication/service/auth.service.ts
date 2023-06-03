import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, ReplaySubject, tap } from "rxjs";
import jwt_decode from 'jwt-decode';
import { User } from "../../user-profile/models/user.model";

interface JwtPayload {
  sub: string;
  iat: number;
  exp: number;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userSubject = new ReplaySubject<User | undefined>(1);
  public readonly user$ = this.userSubject.asObservable();
  private readonly apiUrl = 'http://localhost:8080/api/v1/auth';
  private api = 'http://localhost:8080/api';

  public constructor(private httpClient: HttpClient) {
   this.getUserIfTokenExists();
  }

  public login(email: string, password: string) {
    return this.httpClient.post<any>(`${this.apiUrl}/authenticate`, {email, password}).pipe(
      tap({
        next: async response => {
          localStorage.setItem('token', response.token)
          this.getUserIfTokenExists();
        }
      })
    );
  }

  public register(name: string, email: string, password: string) {
    return this.httpClient.post(`${this.apiUrl}/register`, {name, email, password});
  }

  public logout() {
    localStorage.removeItem('token');
    this.userSubject.next(undefined);
  }

  public isLoggedIn() {
    return !!this.getToken();
  }

  public getToken() {
    return localStorage.getItem('token');
  }

  private fetchCurrentUser(email: string): Observable<User> {
    return this.httpClient.get<User>(`${this.api}/users/${email}`);
  }

  private getUserIfTokenExists() {
    const token = localStorage.getItem("token");
    if (token) {
      const email = jwt_decode<JwtPayload>(token).sub;
      this.fetchCurrentUser(email).subscribe(user => {
        this.userSubject.next(user);
      });
    }
  }
}
