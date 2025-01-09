import { Component } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerModel:any = {
    name: '',
    email: '',
    password: ''
  };

  constructor(private customerService: CustomerService, private router: Router) {}

  onSubmit() {
    // Call the register service method
    this.customerService.registerCustomer(this.registerModel).subscribe(
      (data) => {
        // On successful registration, navigate to login
        this.router.navigate(['/login']);
      },
      (error) => {
        // Handle error (registration failure)
        alert('Registration failed');
      }
    );
  }
}
