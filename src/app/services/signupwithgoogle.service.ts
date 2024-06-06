import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class SignUpWithGoogleService{
  
  private clientId = '1094531298396-26cq219g5330791u1hurfh66og9456qo.apps.googleusercontent.com'; // Replace with your Google Client ID
  private redirectUri = 'http://localhost:8080/shreejwal/returnedfromgoogle'; // Your redirect URI
  private scope = 'profile email';

  signUpWithGoogle(): string {
    const authUrl = 'https://accounts.google.com/o/oauth2/v2/auth';
    const responseType = 'code'; // or 'code' for server-side flow

    const url = `${authUrl}?client_id=${this.clientId}&redirect_uri=${this.redirectUri}&response_type=${responseType}&scope=${this.scope}`;
    return url;
  }
}