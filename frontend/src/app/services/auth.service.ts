// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:5000/api/users';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { email, password });
  }

  setUser(email: string, role: string): void {
    localStorage.setItem('clientEmail', email);
    localStorage.setItem('userRole', role);
  }

  logout(): void {
    localStorage.removeItem('clientEmail');
    localStorage.removeItem('userRole');
  }

  getUserRole(): string | null {
    return localStorage.getItem('userRole');
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('clientEmail');
  }
}
