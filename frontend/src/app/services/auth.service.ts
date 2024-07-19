import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  login(email: string, password: string): Observable<{ role: string }> {
    return this.http
      .post<{ role: string }>('/api/users/login', { email, password })
      .pipe(
        catchError((err) => {
          console.error('Error de inicio de sesión:', err);
          throw err;
        })
      );
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userEmail');
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  getUserRole(): string {
    const email = localStorage.getItem('userEmail');
    return email?.startsWith('admin') ? 'admin' : 'client';
  }
}
