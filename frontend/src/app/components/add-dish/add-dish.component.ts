// src/app/components/add-dish/add-dish.component.ts
import { Component } from '@angular/core';
import { DishService } from '../../services/dish.service';
import { Dish } from '../../models/dish.model';

@Component({
  selector: 'app-add-dish',
  templateUrl: './add-dish.component.html',
  styleUrls: ['./add-dish.component.css'],
})
export class AddDishComponent {
  dishName: string = '';
  price: number = 0;
  description: string = '';

  constructor(private dishService: DishService) {}

  onSubmit(event: Event): void {
    event.preventDefault();
    const dish: Dish = {
      name: this.dishName,
      price: this.price,
      description: this.description,
      _id: '', // El backend asignará un ID automáticamente
    };
    this.dishService.addDish(dish).subscribe(
      (data: any) => {
        console.log('Dish added', data);
      },
      (error: any) => {
        console.error('Error adding dish', error);
      }
    );
  }
}
