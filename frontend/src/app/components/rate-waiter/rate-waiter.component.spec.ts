import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RateWaiterComponent } from './rate-waiter.component';

describe('RateWaiterComponent', () => {
  let component: RateWaiterComponent;
  let fixture: ComponentFixture<RateWaiterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RateWaiterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RateWaiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
