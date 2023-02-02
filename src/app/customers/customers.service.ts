import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Customer } from './customer';
import { map } from 'rxjs/operators';

export class CustomersService {
  #httpClient = inject(HttpClient);

  customers$() {
    const params = new HttpParams().set('page', 1);
    return this.#httpClient
      .get<{ content: Customer[] }>('', { params })
      .pipe(map(({ content }) => content));
  }
}
