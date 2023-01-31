import { Component, Input } from '@angular/core';
import { NgIf, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-holiday-promotion',
  template: `
    <div class="relative" *ngIf="holiday">
      <img
        class="rounded-lg shadow-lg"
        width="5760"
        height="2592"
        [ngSrc]="'/assets/' + holiday.path + '.jpg'"
        alt="Canada"
      />

      <h3
        class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[8vw] font-semibold text-white uppercase"
      >
        {{ holiday.name }}
      </h3>
    </div>
  `,
  standalone: true,
  imports: [NgOptimizedImage, NgIf],
})
export class HolidayPromotionComponent {
  @Input() holiday: { path: string; name: string } | undefined;
}
