import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import jwt_decode from 'jwt-decode';
import {User} from "../../user-profile/models/user.model";

interface JwtPayload {
  sub: string;
  iat: number;
  exp: number;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly apiUrl = 'http://localhost:8080/api/v1/auth';
  private api = 'http://localhost:8080/api';

  currentUser: User | undefined;

  constructor(private httpClient: HttpClient) { }

  login(email: string, password: string) {
    return this.httpClient.post<any>(`${this.apiUrl}/authenticate`, {email, password}).pipe(
      tap({ next: async response => {
          localStorage.setItem('token', response.token)
          const email = jwt_decode<JwtPayload>(response.token).sub;
          await this.fetchCurrentUser(email).subscribe(user => {
            this.currentUser = user;
          });
        }
      })
    );
  }

  register(name: string, email: string, password: string) {
    return this.httpClient.post(`${this.apiUrl}/register`, {name, email, password});
  }

  logout() {
    localStorage.removeItem('token');
  }

  isLoggedIn() {
    return !!this.getToken();
  }

  getToken() {
    return localStorage.getItem('token');
  }

  private fetchCurrentUser(email: string): Observable<User> {
    return this.httpClient.get<User>(`${this.api}/users/${email}`);
  }
}
