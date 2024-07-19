import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(event: Event): void {
    event.preventDefault();
    this.authService.login(this.username, this.password).subscribe(
      (data) => {
        if (data.role) {
          localStorage.setItem('token', 'mock-token');
          localStorage.setItem('userEmail', this.username); // Guardar el email en localStorage
          if (data.role === 'admin') {
            this.router.navigate(['/admin-dashboard']);
          } else {
            this.router.navigate(['/client-dashboard']);
          }
        } else {
          console.error('Credenciales incorrectas');
        }
      },
      (error) => {
        console.error('Error logging in', error);
      }
    );
  }
}
