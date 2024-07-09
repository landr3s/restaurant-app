// src/app/services/restaurant.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  private baseUrl = 'http://localhost:3000/api/restaurants';

  constructor(private http: HttpClient) {}

  getAllRestaurants(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
}
