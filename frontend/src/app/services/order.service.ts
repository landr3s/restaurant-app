import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private apiUrl = 'http://localhost:5000/api/orders'; // URL del backend

  constructor(private http: HttpClient) {}

  getOrders(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  addOrder(order: any): Observable<any> {
    return this.http.post(this.apiUrl, order);
  }
}
