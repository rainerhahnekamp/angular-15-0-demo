import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: HomeComponent,
        title: 'Home',
      },
      {
        path: 'holidays',
        loadChildren: () => import('./holidays/holidays.routes'),
      },
      {
        path: 'customers',
        loadChildren: () =>
          import('./customers/customer.routes').then((m) => m.customerRoutes),
      },
    ],
  },
];
