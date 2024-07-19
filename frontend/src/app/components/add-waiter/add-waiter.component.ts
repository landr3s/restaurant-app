import { Component } from '@angular/core';
import { WaiterService } from '../../services/waiter.service';

@Component({
  selector: 'app-add-waiter',
  templateUrl: './add-waiter.component.html',
  styleUrls: ['./add-waiter.component.css'],
})
export class AddWaiterComponent {
  waiterName: string = '';

  constructor(private waiterService: WaiterService) {}

  onSubmit(event: Event): void {
    event.preventDefault();
    const waiter = {
      name: this.waiterName,
    };
    this.waiterService.addWaiter(waiter).subscribe(
      (data) => {
        console.log('Waiter added', data);
      },
      (error) => {
        console.error('Error adding waiter', error);
      }
    );
  }
}
