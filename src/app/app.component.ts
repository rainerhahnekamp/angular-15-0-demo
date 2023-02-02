import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { HeaderComponent } from './header/header.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { LoadingService } from './shared/loading.service';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatSidenavModule,
    SidemenuComponent,
    RouterModule,
    HeaderComponent,
    MatToolbarModule,
    MatProgressBarModule,
  ],
})
export class AppComponent {
  protected progressBarVisibility$ = inject(LoadingService).isLoading$.pipe(
    map((isLoading) => (isLoading ? 'visible' : 'hidden'))
  );
}
