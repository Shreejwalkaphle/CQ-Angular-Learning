import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PaymentGatewayService } from "../services/payment.gateway.service";

@Component({
  selector: "app-payment",
  styleUrls: ["./payment.gateway.css"],
  templateUrl: "./payment.gateway.html",
})

export class PaymentComponent implements OnInit {
  productName: string = '';
  price: number = 0;

  accountDetails = {
    accountNumber: '',
    cvv: '',
    accountHolderName: '',
  };

  constructor(private route: ActivatedRoute, private paymentGatewayService:PaymentGatewayService) {}
  
  ngOnInit(): void {
    // Subscribe to query parameters
    this.route.queryParams.subscribe((params) => {
      this.productName = params['name'];
      this.price = +params['amount'];
    });
  }

  requesPayload:any;

  submitPayment() {
    this.requesPayload = {
      accountNumber: this.accountDetails.accountNumber,
      cvv: this.accountDetails.cvv,
      accountHolderName: this.accountDetails.accountHolderName,
      productName: this.productName,
      price: this.price
    };
    console.log('Submitting payment details:', this.requesPayload);

    // Call the service method to submit the payment details
    this.paymentGatewayService.submitPaymentDetails(this.requesPayload).subscribe(
      (response) => {
        console.log('Payment success:', response);
        alert("payment successful")
        // Handle the success response (e.g., show success message)
      },
      (error) => {
        console.error('Payment error:', error);
        alert("payment failed");
        // Handle the error response (e.g., show error message)
      }
    );
  }
}
