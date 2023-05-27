import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from '../../auth';

const API_USERS_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class CategoryManagementService {

  httpHeaders: any;

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {
    this.httpHeaders = new HttpHeaders({
      Authorization: `Bearer ${this.authService.getAuthFromLocalStorage()?.authToken}`,
    });
  }

  createCategoryManagement(data: any): Observable<any> {
    return this.http.post(`${API_USERS_URL}/categories/create`, data, { headers: this.httpHeaders });
  }

  readCategoryManagement(): Observable<any> {
    return this.http.get(`${API_USERS_URL}/categories`, { headers: this.httpHeaders });
  }

  updateCategoryManagement(data: any, id: any): Observable<any> {
    return this.http.post(`${API_USERS_URL}/categories/${id}/edit`, data, { headers: this.httpHeaders });
  }

  deleteCategoryManagement(id: any): Observable<any> {
    return this.http.delete(`${API_USERS_URL}/categories/${id}`, { headers: this.httpHeaders });
  }
}
