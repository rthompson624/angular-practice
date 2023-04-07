import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNavHover]'
})
export class NavHoverDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = 'white';
    this.el.nativeElement.style.color = 'forestgreen';
    this.el.nativeElement.style.border = '1px solid forestgreen';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = 'forestgreen';
    this.el.nativeElement.style.color = 'white';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = 'white';
    this.el.nativeElement.style.color = 'forestgreen';
  }
}
