import { enableProdMode, importProvidersFrom, LOCALE_ID } from '@angular/core';
import { environment } from './environments/environment';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { MAT_LEGACY_FORM_FIELD_DEFAULT_OPTIONS as MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/legacy-form-field';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import de from 'date-fns/locale/de';
import { HttpClientModule } from '@angular/common/http';
import {
  BrowserAnimationsModule,
  provideAnimations,
} from '@angular/platform-browser/animations';
import { routes } from './app/app.routes';
import { provideRouter, RouterModule } from '@angular/router';
import { provideStore, StoreModule } from '@ngrx/store';
import { EffectsModule, provideEffects } from '@ngrx/effects';
import { BASE_URL } from './app/shared/base-url.token';
import { NEW_LAYOUT } from './app/shared/new-layout.token';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(),
    provideStore(),
    provideEffects([]),
    provideRouter(routes),
    { provide: LOCALE_ID, useValue: 'de-AT' },
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'outline' },
    },
    { provide: MAT_DATE_LOCALE, useValue: de },
    { provide: BASE_URL, useValue: environment.baseUrl },
    { provide: NEW_LAYOUT, useValue: environment.newLayout },

    importProvidersFrom(HttpClientModule),
  ],
});
