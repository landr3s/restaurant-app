// src/app/ratings/ratings.component.ts
import { Component, OnInit } from '@angular/core';
import { WaiterRatingService } from './waiter-rating.service';
import { WaiterRating } from './waiter-rating.model';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.css'],
})
export class RatingsComponent implements OnInit {
  ratings: WaiterRating[] = [];

  constructor(private waiterRatingService: WaiterRatingService) {}

  ngOnInit(): void {
    this.getRatings();
  }

  getRatings(): void {
    this.waiterRatingService
      .getWaiterRatings()
      .subscribe((data: WaiterRating[]) => {
        this.ratings = data;
      });
  }
}
