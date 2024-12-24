import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UploadToGoogleDriveComponent } from "./uploadToGoogle/UploadToGoogle.component";
import { AuthenticateComponent } from "./authenticate/authenticate.component";
import { AppRoutingModule } from "./app.routes";

@NgModule({
  declarations:[AppComponent,UploadToGoogleDriveComponent,AuthenticateComponent],
  imports:[BrowserModule, FormsModule, HttpClientModule,AppRoutingModule],
  providers:[],
  bootstrap:[AppComponent]
})
export class AppModule{}
