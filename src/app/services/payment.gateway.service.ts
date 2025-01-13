import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  // Import HttpClient to make HTTP requests
import { Observable } from 'rxjs';  // Import Observable for handling async responses

@Injectable({
  providedIn: 'root',  // This ensures the service is available app-wide
})
export class PaymentGatewayService {

  // Define the payment gateway backend API URL (replace with your actual backend API URL)
  private paymentApiUrl = 'http://localhost:8080/api/payment';  // Example URL

  constructor(private http: HttpClient) {}

  // Method to submit payment details
  submitPaymentDetails(requesPayload: any): Observable<any> {
    // Send the account details to the backend API via POST request
    return this.http.post<any>(this.paymentApiUrl, requesPayload);
  }
}
