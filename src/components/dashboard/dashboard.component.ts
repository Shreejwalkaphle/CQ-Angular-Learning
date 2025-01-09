import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userBalance: number = 0;
  customer: any;

  constructor(private router: Router, private customerService: CustomerService) {}

  ngOnInit() {
    this.customer = history.state.customer; // Retrieve customer from route state
    if (this.customer) {
      this.customerService.getCustomerById(this.customer.id).subscribe(
        (data) => {
          this.customer = data;
          this.userBalance = this.customer.balance; // Initialize balance
        },
        (error) => {
          console.error('Failed to fetch customer details', error);
          alert('Error fetching customer details');
        }
      );
      this.userBalance = this.customer.balance; // Initialize balance
      console.log(this.userBalance);
    } else {
      console.error('Customer data not available');
    }
  }

  depositAmount(amount: number): void {
    if (amount > 0) {
      this.customerService.depositAmount(this.customer.id, amount).subscribe(
        (newBalance) => {
          this.userBalance = newBalance; // Update balance
          this.customer.balance = newBalance;
        },
        (error) => {
          console.error('Error depositing amount:', error);
        }
      );
    } else {
      console.error('Invalid deposit amount');
    }
  }

  withdrawAmount(amount: number): void {
    if (amount > 0 && amount <= this.userBalance) {
      this.customerService.withdrawAmount(this.customer.id, amount).subscribe(
        (newBalance) => {
          this.userBalance = newBalance; // Update balance
          this.customer.balance = newBalance;
        },
        (error) => {
          console.error('Error withdrawing amount:', error);
        }
      );
    } else {
      console.error('Invalid withdraw amount');
    }
  }
}
