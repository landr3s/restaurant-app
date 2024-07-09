// src/app/ratings/waiter-rating.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WaiterRating } from './waiter-rating.model';

@Injectable({
  providedIn: 'root',
})
export class WaiterRatingService {
  private apiUrl = 'http://localhost:5000/api/waiter-ratings';

  constructor(private http: HttpClient) {}

  getWaiterRatings(): Observable<WaiterRating[]> {
    return this.http.get<WaiterRating[]>(this.apiUrl);
  }

  addWaiterRating(rating: WaiterRating): Observable<WaiterRating> {
    return this.http.post<WaiterRating>(this.apiUrl, rating);
  }
}
