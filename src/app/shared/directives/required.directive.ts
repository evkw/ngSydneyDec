import { Directive, ElementRef, Input, Renderer, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[textRequired]'
})
export class textRequiredDirective implements AfterViewInit {
  @Input() textRequired: boolean;
  constructor(private el: ElementRef, private renderer: Renderer) { }

  ngAfterViewInit() {
    if (this.textRequired) {
       let requiredSpan = this.renderer.createElement(this.el.nativeElement, 'span');
       this.renderer.setText(requiredSpan, '*');
       this.renderer.setElementStyle(requiredSpan, 'color', 'red');
    }
  }
}
