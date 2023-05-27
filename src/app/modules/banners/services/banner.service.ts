import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from '../../auth';

const API_USERS_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class BannerService {

  httpHeaders: any;

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {
    this.httpHeaders = new HttpHeaders({
      Authorization: `Bearer ${this.authService.getAuthFromLocalStorage()?.authToken}`,
    });
  }

  createBanner(data: any): Observable<any> {
    return this.http.post(`${API_USERS_URL}/banners/create`, data, { headers: this.httpHeaders });
  }

  readBanners(): Observable<any> {
    return this.http.get(`${API_USERS_URL}/banners`, { headers: this.httpHeaders });
  }

  updateBanner(data: any, id: any): Observable<any> {
    return this.http.patch(`${API_USERS_URL}/banners/${id}`, data, { headers: this.httpHeaders });
  }

  deleteBanner(id: any): Observable<any> {
    return this.http.delete(`${API_USERS_URL}/banners/${id}`, { headers: this.httpHeaders });
  }
}
