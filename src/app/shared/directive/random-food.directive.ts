import { Directive, ElementRef, OnInit } from '@angular/core';
import { random } from 'lodash';

@Directive({
  selector: '[appRandomFood]'
})
export class RandomFoodDirective implements OnInit {

  constructor(
    private readonly elementRef: ElementRef
  ) {}

  ngOnInit(): void {
    const textElement = this.elementRef.nativeElement as HTMLElement;
    textElement.style.fontFamily = 'Food';
    textElement.textContent = String.fromCharCode(random(97, 122));
  }
}
