import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { MembersComponent } from './members.component';

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
        loadChildren: () =>
          import('./holidays/holidays.routes').then((m) => m.holidayRoutes),
      },
      { path: 'members', component: MembersComponent },
    ],
  },
];
