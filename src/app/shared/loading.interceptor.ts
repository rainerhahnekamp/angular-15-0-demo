import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponseBase,
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { ConfigService } from '../config-service';
import { inject } from '@angular/core';
import { LoadingService } from './loading.service';

export class LoadingInterceptor implements HttpInterceptor {
  #loadingService = inject(LoadingService);

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.#loadingService.setLoading();
    return next.handle(req).pipe(
      tap((event) => {
        if (event instanceof HttpResponseBase) {
          this.#loadingService.setLoaded();
        }
      })
    );
  }
}
