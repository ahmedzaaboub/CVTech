import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHeighlight]'
})
export class HeighlightDirective {

  @HostBinding('style.backgroundColor') bg = '';
  @HostListener('mouseenter') mouseenter(){

    this.bg = 'yellow';
  }
  @HostListener('mouseleave') mouseleave(){
    this.bg = 'red';
  }
  constructor() { }

}
