import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UploadToGoogleDriveComponent } from "./uploadToGoogle/UploadToGoogle.component";
import { AuthenticateComponent } from "./authenticate/authenticate.component";
import { AppRoutingModule } from "./app.routes";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from "./register/register.component";
import { RegisterService } from "./services/register.service/register.service";
import { LoginComponent } from "./components/logincomponent/login.component";

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestInterceptor } from "./components/interceptors/request.interceptor";

@NgModule({
  declarations:[AppComponent,
    UploadToGoogleDriveComponent,
    AuthenticateComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports:[BrowserModule, FormsModule, HttpClientModule,AppRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,],
  providers:[
    provideAnimationsAsync(),
    RegisterService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true,
    },
  ],
  bootstrap:[AppComponent]
})
export class AppModule{}
