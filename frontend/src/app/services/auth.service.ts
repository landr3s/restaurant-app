import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authenticated: boolean = false;
  private userRole: string | null = null;

  login(
    username: string,
    password: string
  ): { success: boolean; role: string | null } {
    if (username === 'admin@gmail.com' && password === 'admin') {
      this.authenticated = true;
      this.userRole = 'admin';
      return { success: true, role: this.userRole };
    } else if (username === 'client@gmail.com' && password === 'client') {
      this.authenticated = true;
      this.userRole = 'client';
      return { success: true, role: this.userRole };
    } else {
      this.authenticated = false;
      this.userRole = null;
      return { success: false, role: null };
    }
  }

  logout(): void {
    this.authenticated = false;
    this.userRole = null;
  }

  isAuthenticated(): boolean {
    return this.authenticated;
  }

  getUserRole(): string | null {
    return this.userRole;
  }
}
