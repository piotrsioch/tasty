import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs";

interface LoginResponse {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly apiUrl = 'http://localhost:8080/api/v1/auth';
  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    return this.http.post<LoginResponse>(`${this.apiUrl}/authenticate`, {email, password}).pipe(
      tap({ next: response => localStorage.setItem('token', response.token)})
    );
  }

  register(name: string, email: string, password: string) {
    return this.http.post(`${this.apiUrl}/register`, {name, email, password});
  }

  logout() {
    localStorage.removeItem('token');
  }

  isLoggedIn() {
    return !!localStorage.getItem('token');
  }
}
