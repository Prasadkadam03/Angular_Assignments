import { Directive } from '@angular/core';
import { ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomStyle]',
  standalone: true
})
export class CustomStyleDirective {

  constructor(private obj : ElementRef) 
  {

  }

  @HostListener('mouseenter') onmouseenter()
  {
    this.obj.nativeElement.style.background = 'yellow';
    this.obj.nativeElement.style.fontWeight = 'bold';
  }

  @HostListener('mouseleave') onmouseleave()
  {
    this.obj.nativeElement.style.fontWeight = 'normal';
    this.obj.nativeElement.style.background = 'white';
  }
 
}
