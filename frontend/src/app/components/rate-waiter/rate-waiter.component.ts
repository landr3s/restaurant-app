import { Component, OnInit } from '@angular/core';
import { WaiterService } from '../../services/waiter.service';

@Component({
  selector: 'app-rate-waiter',
  templateUrl: './rate-waiter.component.html',
  styleUrls: ['./rate-waiter.component.css'],
})
export class RateWaiterComponent implements OnInit {
  waiters: any[] = [];
  selectedWaiter: string = '';
  rating: number = 0;

  constructor(private waiterService: WaiterService) {}

  ngOnInit() {
    this.waiterService.getWaiters().subscribe(
      (data) => {
        this.waiters = data;
      },
      (error) => {
        console.error('Error fetching waiters', error);
      }
    );
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    this.waiterService.rateWaiter(this.selectedWaiter, this.rating).subscribe(
      (data) => {
        console.log('Waiter rated', data);
      },
      (error) => {
        console.error('Error rating waiter', error);
      }
    );
  }
}
