import { Routes } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { importProvidersFrom } from '@angular/core';
import {
  HTTP_INTERCEPTORS,
  HttpClientModule,
  provideHttpClient,
  withInterceptorsFromDi,
  withRequestsMadeViaParent,
} from '@angular/common/http';
import { CustomersService } from './customers.service';
import { CustomersInterceptor } from './customers.interceptor';
import { LoadingInterceptor } from '../shared/loading.interceptor';

export const customerRoutes: Routes = [
  {
    path: '',
    providers: [
      provideHttpClient(withInterceptorsFromDi(), withRequestsMadeViaParent()),
      CustomersService,
      {
        provide: HTTP_INTERCEPTORS,
        useClass: CustomersInterceptor,
        multi: true,
      },
    ],
    children: [
      {
        path: '',
        component: CustomersComponent,
      },
    ],
  },
];
