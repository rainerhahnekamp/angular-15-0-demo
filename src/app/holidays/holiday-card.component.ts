import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Holiday } from './model/holiday';
import { NgIf } from '@angular/common';
import { BlinkerDirective } from '../shared/blinker.directive';
import { TestidDirective } from '../shared/testid.directive';

@Component({
  selector: 'app-holiday-card',
  template: ` <div
    class="flex flex-wrap justify-evenly"
    appBlinker
    testid="holiday-card"
  >
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
  imports: [
    MatCardModule,
    MatButtonModule,
    BlinkerDirective,
    TestidDirective,
    NgIf,
  ],
})
export class HolidayCardComponent {
  @Input() holiday: Holiday | undefined;
}
