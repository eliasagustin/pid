import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appImgBroken]'
})
export class ImgBrokenDirective {

  @HostListener('error') handleError() {
    const element = this.elHost.nativeElement;
    element.src = 'https://seranking.com/blog/wp-content/uploads/2021/01/404_01-min.jpg';
    console.log('La imagen no cargó de forma correcta',
                 this.elHost.nativeElement);
  }

  constructor(private elHost:ElementRef) { }

}
