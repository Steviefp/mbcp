import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { AuthService } from '../authentication/auth.service';

import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class TripService {
  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private cookieService: CookieService
  ) {}

  getTrip(id: string) {
    return this.http.get('http://34.220.86.249/v1/content?content_id=' + id);
  }

  createTrip() {
    const date = new Date();
    const created_date = date.toISOString();
    let formData: FormData = new FormData();
    formData.append('content_id', 'TEST');
    formData.append('created_date', created_date);
    formData.append('visibility', 'everyone');
    formData.append('image_url', 'TEST');
    formData.append('activity_type', 'TEST');
    formData.append('city', 'TEST');
    formData.append('name', 'TEST');
    formData.append('total_spots', '1');
    formData.append('cost', '1.1');
    formData.append('start_date', '2018-09-05T00:00:00+00:00');
    formData.append('end_date', '2018-09-05T00:00:00+00:00');
    formData.append('owner_type', 'user');
    formData.append('owner_id', this.cookieService.get('id'));
    formData.append('owner_name', this.cookieService.get('name'));
    formData.append('owner_username', this.cookieService.get('username'));
    formData.append('subscriptions', this.cookieService.get('id'));
    return this.http.post('http://34.220.86.249/v1/content', formData);
  }
}
