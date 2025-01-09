import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.routes";
import { FormsModule } from "@angular/forms";
import { RegisterComponent } from "../components/register/register.component";
import { LoginComponent } from "../components/login/login.component";
import { DashboardComponent } from "../components/dashboard/dashboard.component";

@NgModule({
  declarations:[AppComponent,RegisterComponent,LoginComponent,DashboardComponent],
  imports:[BrowserModule, AppRoutingModule, FormsModule],
  providers:[],
  bootstrap:[AppComponent]
})
export class AppModule{}
