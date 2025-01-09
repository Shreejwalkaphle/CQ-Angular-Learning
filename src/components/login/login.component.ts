import { Component } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  Customer = {
    email: '',
    password: ''
  };

  constructor(private customerService: CustomerService, private router: Router) {}

  onSubmit() {
    // Call the login service method
    this.customerService.loginCustomer(this.Customer).subscribe(
      (customer) => {
        console.log(customer);
        // On successful login, navigate to the dashboard
        this.router.navigate(['/dashboard'], { state: { customer } });
      },
      (error) => {
        // Handle error (invalid credentials)
        alert('Invalid credentials');
      }
    );
  }
}
