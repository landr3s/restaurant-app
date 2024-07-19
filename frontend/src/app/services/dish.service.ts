import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DishService {
  private apiUrl = 'http://localhost:5000/api/dishes'; // URL del backend

  constructor(private http: HttpClient) {}

  getDishes(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  addDish(dish: any): Observable<any> {
    return this.http.post(this.apiUrl, dish);
  }
}
