import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[hightlight]'
})
export class HightlightDirective {
  constructor(private el: ElementRef) {}

  @HostListener('keydown') onKeyDown() {

    const text = this.el.nativeElement.value;

    if (text === 'bar') {
      this.el.nativeElement.nextSibling.innerHTML = 'match';
    } else {
      this.el.nativeElement.nextSibling.innerHTML = '';
    }  
  }
}
