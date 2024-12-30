import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { UploadToGoogleDriveComponent } from './uploadToGoogle/UploadToGoogle.component';
import { LoginComponent } from './components/logincomponent/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'authenticate', component: AuthenticateComponent },
  { path: 'upload-to-google-drive', component: UploadToGoogleDriveComponent },
  { path: '', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
