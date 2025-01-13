import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PaymentResponse } from '../app/models/interface.payment.response';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  constructor(private http: HttpClient) {
  } 
  
  buyLemonade() {
    const product = {
      name: 'Lemonade',
      price: 5
    };
  
    this.http.post<PaymentResponse>('http://localhost:9191/api/payment/order', product).subscribe(
      (response: PaymentResponse) => {
        // Now TypeScript knows that response will have a 'paymentLink' property
        window.location.href = response.paymentLink;  // Redirect to Razorpay's checkout page
      },
      (error) => {
        alert('Payment failed');
      }
    );
  }
  
  
}
