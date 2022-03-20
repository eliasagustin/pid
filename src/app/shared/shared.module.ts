import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgBrokenDirective } from './directives/img-broken.directive';
import { CodeViewerComponent } from './code-viewer/code-viewer.component';


@NgModule({
  declarations: [
    ImgBrokenDirective,
    CodeViewerComponent
  ],
  imports: [
    CommonModule,

  ],
  exports: [
    ImgBrokenDirective,
    CodeViewerComponent
  ]
})
export class SharedModule { }
