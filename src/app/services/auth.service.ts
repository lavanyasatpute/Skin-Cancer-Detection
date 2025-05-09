import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://your-backend-api-url';  // Replace with your backend API

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { email, password });
  }

  signup(email: string, password: string, name: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/signup`, { email, password, name });
  }
}
