import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.css'],
})
export class AuthenticateComponent {
  constructor(private http: HttpClient, private router: Router) {}

  onAuthenticate() {
    this.http.get('http://localhost:9090/api/authenticate', { responseType: 'text' })
      .subscribe((authorizationUrl: string) => {
        window.location.href = authorizationUrl; // Redirect to Google
      });
  }
}
