// src/app/order/order.component.ts
import { Component, OnInit } from '@angular/core';
import { OrderService } from './order.service';
import { Order } from './order.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
  orders: Order[] = [];

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders(): void {
    this.orderService.getOrders().subscribe((data: Order[]) => {
      this.orders = data;
    });
  }
}
