import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverStyle]',
  standalone: true
})
export class HoverStyleDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.setShadow('0 8px 16px rgba(0,0,0,0.2)', 'scale(1.02)');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setShadow('none', 'scale(1)');
  }

  private setShadow(shadow: string, transform: string) {
    this.renderer.setStyle(this.el.nativeElement, 'box-shadow', shadow);
    this.renderer.setStyle(this.el.nativeElement, 'transform', transform);
    this.renderer.setStyle(this.el.nativeElement, 'transition', '0.3s ease-in-out');
  }
}
