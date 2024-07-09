// src/app/order/order.model.ts
import { Menu } from '../menu/menu.model';

export interface Order {
  id?: string;
  customerName: string;
  items: Menu[];
  totalAmount: number;
}
