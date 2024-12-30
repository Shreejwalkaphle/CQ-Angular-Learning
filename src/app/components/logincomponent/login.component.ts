import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { User } from '../../models/User.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;
  isSubmitted = false;

  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]],  // Email validation
      password: ['', [Validators.required, Validators.minLength(6)]],  // Password validation
    });
  }

  onSubmit(): void {
    this.isSubmitted = true;

    if (this.loginForm.valid) {
      const user: User = {
        username: this.loginForm.value.username,
        password: this.loginForm.value.password,
      };

      this.loginService.login(user).subscribe({
        next: (response: any) => {
          alert('Login successful!')
          this.router.navigate(['/authenticate']);  // Navigate to login page after registration

        },
        error: (error: any) => alert('Login failed!'),
      });
    }
  }
}
