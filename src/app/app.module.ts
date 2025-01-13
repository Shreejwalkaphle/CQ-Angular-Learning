import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { PaymentComponent } from "./components/payment.gateway";
import { HttpClientModule } from "@angular/common/http";
import { PaymentGatewayService } from "./services/payment.gateway.service";
const routes: Routes = [
  { path: '', redirectTo: 'payment', pathMatch: 'full' }, // Default route redirects to 'payment'
  { path: 'payment', component: PaymentComponent }, // Route for PaymentComponent
];

@NgModule({
  declarations:[AppComponent, PaymentComponent],
  imports:[BrowserModule, FormsModule, RouterModule.forRoot(routes),HttpClientModule],
  providers:[PaymentGatewayService],
  bootstrap:[AppComponent]
})
export class AppModule{}
