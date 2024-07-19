import { Component, OnInit } from '@angular/core';
import { DishService } from '../../services/dish.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  dishes: any[] = [];

  constructor(private dishService: DishService) {}

  ngOnInit(): void {
    this.dishService.getDishes().subscribe((data) => {
      this.dishes = data;
    });
  }
}
