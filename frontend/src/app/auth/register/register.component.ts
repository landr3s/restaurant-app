// src/app/auth/register/register.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  username = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    this.authService.register(this.username, this.password).subscribe(
      (response) => {
        this.router.navigate(['/login']);
      },
      (error) => {
        console.error('Error registering', error);
      }
    );
  }
}
