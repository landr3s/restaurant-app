// src/app/services/menu.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private apiUrl = 'http://localhost:3000/api/menus'; // Ajusta la URL según tu backend

  constructor(private http: HttpClient) {}

  getAllMenus(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
