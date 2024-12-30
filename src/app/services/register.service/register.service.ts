import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../models/User.model';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  private baseUrl = 'http://localhost:9090'; // Adjust as needed

  constructor(private http: HttpClient) {}

  register(user: User): Observable<any> {
    return this.http.post(`${this.baseUrl}/registerUser`, user);
  }
}
