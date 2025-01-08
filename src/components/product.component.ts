import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PaymentResponse } from '../app/models/interface.payment.response';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  // products = [
  //   {
  //     name: 'Product 1',
  //     originalPrice: 150,
  //     discount: 20, // in percentage
  //     newPrice: 0, // calculated dynamically
  //     color: 'Red',
  //     manufactureDate: '2025-01-01',
  //     expiryDate: '2026-01-01',
  //     image: 'https://via.placeholder.com/150',
  //     showDetails: false,
  //   },
  //   {
  //     name: 'Product 2',
  //     originalPrice: 200,
  //     discount: 15,
  //     newPrice: 0,
  //     color: 'Blue',
  //     manufactureDate: '2024-06-15',
  //     expiryDate: '2025-06-15',
  //     image: 'https://via.placeholder.com/150',
  //     showDetails: false,
  //   },
  //   {
  //     name: 'Product 3',
  //     originalPrice: 300,
  //     discount: 10,
  //     newPrice: 0,
  //     color: 'Green',
  //     manufactureDate: '2023-12-01',
  //     expiryDate: '2024-12-01',
  //     image: 'https://via.placeholder.com/150',
  //     showDetails: false,
  //   },
  //   {
  //     name: 'Product 4',
  //     originalPrice: 400,
  //     discount: 25,
  //     newPrice: 0,
  //     color: 'Yellow',
  //     manufactureDate: '2022-09-10',
  //     expiryDate: '2023-09-10',
  //     image: 'https://via.placeholder.com/150',
  //     showDetails: false,
  //   },
  // ];

  // constructor(private http: HttpClient) {
  //   // Calculate the new price for each product
  //   this.products.forEach((product) => {
  //     product.newPrice = this.calculateNewPrice(
  //       product.originalPrice,
  //       product.discount
  //     );
  //   });
  // }

  constructor(private http: HttpClient) {
  }

  // Calculate the new price based on the discount
  // calculateNewPrice(originalPrice: number, discount: number): number {
  //   return +(originalPrice * (1 - discount / 100)).toFixed(2);
  // }

  // Toggle Details for a Product
  // toggleDetails(index: number) {
  //   this.products[index].showDetails = !this.products[index].showDetails;
  // }

  // // Buy Product and send the request to the backend
  // buyProduct(product: any) {
  //   const productToSend = {
  //     name: product.name,
  //     color: product.color,
  //     newPrice: product.newPrice,
  //     manufactureDate: product.manufactureDate,
  //     expiryDate: product.expiryDate,
  //   };

  //   this.http.post('http://localhost:9090/api/payment/order', productToSend, { responseType: 'text' }).subscribe({
  //     next: (response) => {
  //       alert('Payment Successful!');
  //       console.log('Response:', response);
  //     },
  //     error: (err) => {
  //       alert('Payment Failed!');
  //       console.error('Error:', err);
  //     },
  //     complete: () => {
  //       console.log('Payment request completed.');
  //     }
  //   });
    
  
  buyLemonade() {
    const product = {
      name: 'Lemonade',
      price: 5
    };
  
    this.http.post<PaymentResponse>('http://localhost:9090/api/payment/order', product).subscribe(
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
