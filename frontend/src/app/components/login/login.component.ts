import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    const result = this.authService.login(this.email, this.password);
    if (result.success) {
      if (result.role === 'admin') {
        this.router.navigate(['/admin-dashboard']);
      } else if (result.role === 'client') {
        this.router.navigate(['/client-dashboard']);
      }
    } else {
      this.errorMessage = 'Credenciales incorrectas';
    }
  }
}
