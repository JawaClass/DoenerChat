import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHorizontalScrollDirective]',
  standalone: true,
})
export class HorizontalScrollDirective {
  constructor(private el: ElementRef<HTMLElement>) {}

  @HostListener('wheel', ['$event'])
  onWheel(event: WheelEvent) {
    // Only hijack if there's no horizontal intent already (e.g. trackpad shift-scroll)
    if (event.deltaY !== 0) {
      event.preventDefault();
      this.el.nativeElement.scrollLeft += event.deltaY;
    }
  }
}
