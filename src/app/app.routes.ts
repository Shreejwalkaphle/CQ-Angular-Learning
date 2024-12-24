import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { UploadToGoogleDriveComponent } from './uploadToGoogle/UploadToGoogle.component';

const routes: Routes = [
  { path: '', component: AuthenticateComponent },
  { path: 'upload-to-google-drive', component: UploadToGoogleDriveComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
