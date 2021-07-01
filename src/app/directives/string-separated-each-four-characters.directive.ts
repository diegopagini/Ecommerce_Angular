import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[string-separated-each-four-characters]',
})
export class StringSeparatedEachFourCharactersDirective {
  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event']) onInputChange(event) {
    const initalValue = this.el.nativeElement.value;
    this.el.nativeElement.value = initalValue.match(/.{1,4}/g).join(' ');
    if (initalValue !== this.el.nativeElement.value) {
      event.stopPropagation();
    }
  }
}
