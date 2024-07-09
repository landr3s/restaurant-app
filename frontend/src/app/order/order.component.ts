// src/app/order/order.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from '../services/restaurant.service';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
})
export class OrderComponent implements OnInit {
  restaurantId: string = '';
  restaurant: any;
  items: any[] = [];
  selectedItems: any[] = [];
  total: number = 0;

  constructor(
    private route: ActivatedRoute,
    private restaurantService: RestaurantService,
    private orderService: OrderService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.restaurantId = params['restaurantId'];
      this.loadRestaurant();
    });
  }

  loadRestaurant() {
    this.restaurantService.getAllRestaurants().subscribe((data: any) => {
      this.restaurant = data.find((res: any) => res._id === this.restaurantId);
      this.items = this.restaurant.dishes;
    });
  }

  addToOrder(item: any) {
    this.selectedItems.push(item);
    this.total += item.price;
  }

  placeOrder() {
    const userId = localStorage.getItem('userId');
    if (userId) {
      this.orderService
        .createOrder({
          userId,
          restaurantId: this.restaurantId,
          items: this.selectedItems,
          total: this.total,
        })
        .subscribe((response) => {
          alert('Order placed successfully');
        });
    } else {
      // Manejar el caso cuando userId es null
      console.error('No userId found in localStorage');
    }
  }
}
