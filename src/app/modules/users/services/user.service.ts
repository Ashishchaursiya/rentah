import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from '../../auth';

const API_USERS_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  httpHeaders: any;

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {
    this.httpHeaders = new HttpHeaders({
      Authorization: `Bearer ${this.authService.getAuthFromLocalStorage()?.authToken}`,
    });
  }

  createUser(data: any): Observable<any> {
    return this.http.post(``, data, { headers: this.httpHeaders });
  }

  readUsers(): Observable<any> {
    return this.http.get(``, { headers: this.httpHeaders });
  }

  updateUser(data: any, id: any): Observable<any> {
    return this.http.patch(``, data, { headers: this.httpHeaders });
  }

  deleteUser(id: any): Observable<any> {
    return this.http.delete(``, { headers: this.httpHeaders });
  }
}
