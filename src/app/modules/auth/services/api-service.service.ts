import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from '../../auth';

const API_USERS_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  httpHeaders: any;

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {
    this.httpHeaders = new HttpHeaders({
      Authorization: `Bearer ${this.authService.getAuthFromLocalStorage()?.authToken}`,
    });
  }

  sendNotificationToAllUsers(data: any) {
    return this.http.post(`${API_USERS_URL}/notifications/users`, data, { headers: this.httpHeaders })

  }
}
