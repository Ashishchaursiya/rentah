import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserModel } from '../../models/user.model';
import { environment } from '../../../../../environments/environment';
import { AuthModel } from '../../models/auth.model';

const API_USERS_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root',
})
export class AuthHTTPService {

  constructor(private http: HttpClient) {
  }

  // public methods
  login(email: string, password: string): Observable<any> {
    // return this.http.post(`${API_USERS_URL}/admins/login`, 
    return this.http.post(`${API_USERS_URL}/admins/login`,
      {
        email: email,
        password: password,
      });
  }

  // CREATE =>  POST: add a new user to the server
  createUser(user: UserModel): Observable<UserModel> {
    return this.http.post<UserModel>(API_USERS_URL, user);
  }

  // Your server should check email => If email exists send link to the user and return true | If email doesn't exist return false
  forgotPassword(email: string): Observable<boolean> {
    return this.http.post<boolean>(`${API_USERS_URL}/forgot-password`, {
      email,
    });
  }

  getUserByToken(token: string): Observable<UserModel> {
    const httpHeaders = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.get<UserModel>(`${API_USERS_URL}/me`, {
      headers: httpHeaders,
    });
  }

  getAdminById(token: string, id: number) {
    const httpHeaders = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.get<UserModel>(`${API_USERS_URL}/admins/${id}`, {
      headers: httpHeaders,
    });
  }

  uploadSingleImage(data: any) {
    return this.http.post(`${API_USERS_URL}/upload-single-image/`, data);
  }

  uploadMultipleImages(data: any) {
    return this.http.post(`${API_USERS_URL}/upload-multiple-images/`, data);
  }

  editAdminImage(id: string, data: any) {
    return this.http.patch(`${API_USERS_URL}/admins/${id}/image`, data);
  }

  editAdminDetails(id: string, data: any) {
    return this.http.patch(`${API_USERS_URL}/admins/${id}`, data);
  }

  getDashboardCounts() {
    return this.http.get(`${API_USERS_URL}/dashboard-counts/`);
  }

}
