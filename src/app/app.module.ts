import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { SignUpWithGoogleService } from "./services/signupwithgoogle.service";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./homepage/homepage.component";

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'homepage', component: HomeComponent }
];
@NgModule({
  declarations:[AppComponent,DashboardComponent,HomeComponent],
  imports:[BrowserModule,HttpClientModule,RouterModule.forRoot(routes)],
  providers:[SignUpWithGoogleService],
  bootstrap:[AppComponent]
})
export class AppModule{}
