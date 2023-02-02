import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Holiday } from './model/holiday';
import { ConfigService } from '../config-service';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class HolidaysService {
  private httpClient = inject(HttpClient);
  private configService = inject(ConfigService);

  load() {
    return this.httpClient.get<Holiday[]>('/holiday').pipe(
      map((holidays) =>
        holidays.map((holiday) => ({
          ...holiday,
          imageUrl: `${this.configService.baseUrl}${holiday.imageUrl}`,
        }))
      )
    );
  }
}
