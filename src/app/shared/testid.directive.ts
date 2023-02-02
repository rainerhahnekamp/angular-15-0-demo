import { Directive, ElementRef, inject, Input, OnInit } from '@angular/core';
import { ConfigService } from '../config-service';

@Directive({
  selector: '[testid]',
  standalone: true,
})
export class TestidDirective implements OnInit {
  @Input() testid = '';

  #el = inject(ElementRef);
  #configService = inject(ConfigService);

  ngOnInit(): void {
    const htmlElement = this.#el.nativeElement as HTMLElement;
    htmlElement.removeAttribute('testid');
    if (this.#el.nativeElement) {
      htmlElement.setAttribute('data-testid', this.testid);
    }
  }
}
