import { Component, Input } from '@angular/core';
import {
  IMAGE_LOADER,
  NgIf,
  NgOptimizedImage,
  provideCloudinaryLoader,
} from '@angular/common';

@Component({
  selector: 'app-holiday-promotion',
  template: `
    <div class="relative" *ngIf="holiday">
      <img
        class="rounded-lg shadow-lg"
        width="1115"
        height="627"
        [priority]="isPriority"
        [ngSrc]="'/assets/' + holiday.path + '.jpg'"
        ngSrcset="1x, 2x, 3x"
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
  // providers: [provideCloudinaryLoader('https://res.cloudinary.com/dhidasbqj')],
})
export class HolidayPromotionComponent {
  @Input() holiday: { path: string; name: string } | undefined;
  @Input() isPriority = false;
}
