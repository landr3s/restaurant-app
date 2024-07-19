import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WaiterService {
  private apiUrl = 'http://localhost:5000/api/waiters'; // URL del backend

  constructor(private http: HttpClient) {}

  getWaiters(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  addWaiter(waiter: any): Observable<any> {
    return this.http.post(this.apiUrl, waiter);
  }

  rateWaiter(id: string, rating: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/rate/${id}`, { rating });
  }
}
