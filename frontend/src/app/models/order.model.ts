// src/app/models/order.model.ts
import { Dish } from './dish.model';

export interface Order {
  _id: string;
  dishes: Dish[];
  clientEmail: string;
}
