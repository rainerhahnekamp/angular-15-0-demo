import { Component } from '@angular/core';
import { HolidayPromotionComponent } from './holiday-promotion.component';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'eternal-home',
  template: `<h2 data-testid="greeting">Welcome to Eternal</h2>
    <p>
      Eternal is an imaginary travel agency and is used as training application
      for Angular developers.
    </p>
    <p>
      You can click around, do whatever you want but don't expect to be able to
      book a real holiday 😉.
    </p>
    <h3 class="text-lg font-bold mt-4 mb-2">Discover our latest additions</h3>
    <div class="flex flex-col gap-2">
      <app-holiday-promotion
        *ngFor="let holiday of holidays"
        [holiday]="holiday"
      ></app-holiday-promotion>
    </div>`,
  standalone: true,
  imports: [HolidayPromotionComponent, NgForOf],
})
export class HomeComponent {
  holidays = [
    { path: 'canada', name: 'Canada' },
    { path: 'norway', name: 'Norway' },
  ];
}
