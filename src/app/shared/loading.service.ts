import { Injectable } from '@angular/core';
import { BehaviorSubject, delay } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LoadingService {
  #isLoading$ = new BehaviorSubject<boolean>(false);

  isLoading$ = this.#isLoading$.asObservable().pipe(delay(0));

  setLoading = () => {
    this.#isLoading$.next(true);
  };

  setLoaded = () => {
    this.#isLoading$.next(false);
  };
}
