import { Injectable } from '@angular/core';
import { Dish } from '../models/dish';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Dish[] = [];

  addToCart(dish: Dish): void {
    this.cart.push(dish);
  }

  getCart(): Dish[] {
    return this.cart;
  }

  clearCart(): void {
    this.cart = [];
  }
}
