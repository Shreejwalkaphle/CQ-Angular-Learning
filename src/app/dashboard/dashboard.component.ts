import { Component } from "@angular/core";
import { SignUpWithGoogleService } from "../services/signupwithgoogle.service";

@Component({
  selector:'dashboard-component',
  templateUrl:'./dashboard.component.html',
  styleUrls:['./dashboard.component.css'] // Ensure this line is included
})
export class DashboardComponent{
  constructor(private signupwithgoogelservice:SignUpWithGoogleService){}

  signupwithgoogle(){
    const url = this.signupwithgoogelservice.signUpWithGoogle();
    // Redirect the browser to Google's authentication page
    window.location.href = url;
  }
}