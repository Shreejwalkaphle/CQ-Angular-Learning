import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../services/register.service/register.service';
import { User } from '../models/User.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  registerForm: FormGroup;
  isSubmitted = false;

  constructor(private fb: FormBuilder, private registerService: RegisterService, private router: Router  // Inject Router
  ) {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    });
  }

  onSubmit(): void {
    this.isSubmitted = true;

    if (this.registerForm.value.password !== this.registerForm.value.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    if (this.registerForm.valid) {
      const user: User = {
        username: this.registerForm.value.username,
        password: this.registerForm.value.password,
      };

      this.registerService.register(user).subscribe({
        next: (response:any) => {
          alert('Registration successful!')
          this.router.navigate(['/login']);  // Navigate to login page after registration
        },
        error: (error:any) => alert('Registration failed!'),
      });
    }
  }
}
