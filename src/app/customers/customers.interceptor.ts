import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { inject, Injectable } from '@angular/core';
import { ConfigService } from '../config-service';

@Injectable()
export class CustomersInterceptor implements HttpInterceptor {
  #configService = inject(ConfigService);

  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(
      req.clone({ url: `${this.#configService.baseUrl}/customers${req.url}` })
    );
  }
}
