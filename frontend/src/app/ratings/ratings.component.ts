// src/app/rate/rate.component.ts
import { Component, OnInit } from '@angular/core';
import { RatingService } from '../services/rating.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rate',
  templateUrl: './ratings.component.html',
})
export class RatingsComponent implements OnInit {
  orders: any[] = [];
  selectedOrder: any;
  rating: number = 0;
  comment: string = '';

  constructor(
    private ratingService: RatingService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const userId = localStorage.getItem('userId');
    if (userId) {
      this.ratingService.getUserRatings(userId).subscribe((data: any) => {
        this.orders = data;
      });
    } else {
      // Manejar el caso cuando userId es null
      console.error('No userId found in localStorage');
    }
  }

  selectOrder(order: any) {
    this.selectedOrder = order;
  }

  submitRating() {
    const userId = localStorage.getItem('userId');
    if (userId) {
      this.ratingService
        .rateOrder({
          userId,
          orderId: this.selectedOrder._id,
          rating: this.rating,
          comment: this.comment,
        })
        .subscribe((response) => {
          alert('Rating submitted successfully');
        });
    } else {
      // Manejar el caso cuando userId es null
      console.error('No userId found in localStorage');
    }
  }
}
