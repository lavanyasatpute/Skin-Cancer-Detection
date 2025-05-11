import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private baseUrl = "http://127.0.0.1:5000/auth"
  constructor(private http:HttpClient) {
  }


  register(data: any){
    return this.http.post(`${this.baseUrl}/register`, data);
    
  }
}