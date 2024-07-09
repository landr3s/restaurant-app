// src/app/services/rating.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RatingService {
  private baseUrl = 'http://localhost:3000/api/ratings';

  constructor(private http: HttpClient) {}

  rateOrder(ratingData: any): Observable<any> {
    return this.http.post(this.baseUrl, ratingData);
  }

  getUserRatings(userId?: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${userId}`);
  }
}
