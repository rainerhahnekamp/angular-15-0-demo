import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { Holiday } from './model/holiday';
import { CommonModule } from '@angular/common';
import { HolidaysComponent } from './holidays.component';
import { BlinkerDirective } from '../shared/blinker.directive';

@Component({
  selector: 'app-holiday-card',
  template: ` <div class="flex flex-wrap justify-evenly" appBlinker>
    <mat-card *ngIf="holiday" class="mt-4 max-w-xs">
      <mat-card-header>
        <mat-card-title>{{ holiday.title }}</mat-card-title>
        <mat-card-subtitle>{{ holiday.teaser }}</mat-card-subtitle>
      </mat-card-header>
      <img [src]="holiday.imageUrl" [alt]="holiday.title" />
      <mat-card-content>
        {{ holiday.description }}
      </mat-card-content>
      <mat-card-actions>
        <button mat-raised-button>Request Brochure</button>
      </mat-card-actions>
    </mat-card>
  </div>`,
  standalone: true,
  imports: [MatCardModule, MatButtonModule, CommonModule, BlinkerDirective],
})
export class HolidayCardComponent {
  @Input() holiday: Holiday | undefined;
}
