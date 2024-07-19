// src/app/services/order.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../models/order.model';
import { Dish } from '../models/dish.model';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private apiUrl = 'http://localhost:5000/api/orders';

  constructor(private http: HttpClient) {}

  createOrder(order: {
    dishes: Dish[];
    clientEmail: string | null;
  }): Observable<Order> {
    return this.http.post<Order>(this.apiUrl, order);
  }

  getClientEmail(): string | null {
    return localStorage.getItem('clientEmail');
  }

  getClientOrders(): Observable<Order[]> {
    const clientEmail = this.getClientEmail();
    if (!clientEmail) {
      throw new Error('Client email is not set in localStorage');
    }
    return this.http.get<Order[]>(`${this.apiUrl}/client/${clientEmail}`);
  }
}
