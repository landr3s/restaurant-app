// src/app/components/orders/orders.component.ts
import { Component, OnInit } from '@angular/core';
import { DishService } from '../../services/dish.service';
import { OrderService } from '../../services/order.service';
import { Dish } from '../../models/dish.model';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  dishes: Dish[] = [];
  selectedDishes: Dish[] = [];

  constructor(
    private dishService: DishService,
    private orderService: OrderService
  ) {}

  ngOnInit(): void {
    this.dishService.getDishes().subscribe((dishes) => {
      this.dishes = dishes;
    });
  }

  placeOrder(): void {
    const order = {
      dishes: this.selectedDishes,
      clientEmail: this.orderService.getClientEmail(),
    };

    this.orderService.createOrder(order).subscribe(() => {
      alert('Order placed successfully!');
      this.selectedDishes = [];
    });
  }

  toggleDishSelection(dish: Dish): void {
    const index = this.selectedDishes.indexOf(dish);
    if (index > -1) {
      this.selectedDishes.splice(index, 1);
    } else {
      this.selectedDishes.push(dish);
    }
  }
}
