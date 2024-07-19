import { Component } from '@angular/core';
import { DishService } from '../../services/dish.service';

@Component({
  selector: 'app-add-dish',
  templateUrl: './add-dish.component.html',
  styleUrls: ['./add-dish.component.css'],
})
export class AddDishComponent {
  dishName: string = '';
  price: number = 0;

  constructor(private dishService: DishService) {}

  onSubmit(event: Event): void {
    event.preventDefault();
    const dish = {
      name: this.dishName,
      price: this.price,
    };
    this.dishService.addDish(dish).subscribe(
      (data) => {
        console.log('Dish added', data);
      },
      (error) => {
        console.error('Error adding dish', error);
      }
    );
  }
}
