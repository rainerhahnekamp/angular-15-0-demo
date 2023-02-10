import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { inject, Injectable } from '@angular/core';
import { ConfigService } from './config-service';

@Injectable()
export class BaseUrlInterceptor implements HttpInterceptor {
  #configService = inject(ConfigService);

  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (!req.url.startsWith('http://')) {
      return next.handle(
        req.clone({ url: `${this.#configService.baseUrl}${req.url}` })
      );
    }

    return next.handle(req);
  }
}

export const baseUrlInterceptor: HttpInterceptorFn = (req, next) => {
  const configService = inject(ConfigService);
  if (!req.url.startsWith('https://')) {
    return next(req.clone({ url: `${configService.baseUrl}${req.url}` }));
  }

  return next(req);
};
