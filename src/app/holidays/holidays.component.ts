import { Component, inject } from '@angular/core';
import { HolidaysService } from './holidays.service';
import { AsyncPipe, NgForOf, NgIf } from '@angular/common';
import { HolidayCardComponent } from './holiday-card.component';

@Component({
  template: `<h2>Choose among our Holidays</h2>
    <div
      class="flex justify-evenly flex-wrap"
      *ngIf="holidays$ | async as holidays"
    >
      <app-holiday-card
        *ngFor="let holiday of holidays"
        [holiday]="holiday"
        blinkerInterval="100"
        testid="holiday-card"
      ></app-holiday-card>
    </div>`,
  selector: 'eternal-holidays',
  standalone: true,
  imports: [NgIf, AsyncPipe, NgForOf, HolidayCardComponent],
})
export class HolidaysComponent {
  protected holidays$ = inject(HolidaysService).load();
}
