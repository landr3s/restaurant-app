// src/app/components/my-orders/my-orders.component.ts
import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { Order } from '../../models/order.model';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css'],
})
export class MyOrdersComponent implements OnInit {
  orders: Order[] = [];

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    const clientEmail = this.orderService.getClientEmail();
    if (clientEmail) {
      this.orderService.getClientOrders().subscribe(
        (orders) => {
          this.orders = orders;
        },
        (error) => {
          console.error('Error fetching orders', error);
        }
      );
    } else {
      console.error('Client email is not set in localStorage');
    }
  }
}
