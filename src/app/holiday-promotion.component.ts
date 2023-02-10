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
        width="1103"
        height="620"
        [priority]="isPriority"
        [ngSrc]="'/angular-15/' + holiday.path + '.jpg'"
        alt="Canada"
        sizes="(max-width: 1023px) calc(100vw - 192px), (max-width: 1279px) calc((100vw - 192px) / 2), calc(100vw - 100vw + 548px)"
      />

      <h3
        class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[8vw] lg:text-[90px] font-semibold text-white uppercase"
      >
        {{ holiday.name }}
      </h3>
    </div>
  `,
  standalone: true,
  imports: [NgOptimizedImage, NgIf],
  providers: [provideCloudinaryLoader('https://res.cloudinary.com/dhidasbqj')],
})
export class HolidayPromotionComponent {
  @Input() holiday: { path: string; name: string } | undefined;
  @Input() isPriority = false;
}
