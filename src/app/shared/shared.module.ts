import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgBrokenDirective } from './directives/img-broken.directive';
import { CodeViewerComponent } from './code-viewer/code-viewer.component';
import {MatExpansionModule} from '@angular/material/expansion';


@NgModule({
  declarations: [
    ImgBrokenDirective,
    CodeViewerComponent
  ],
  imports: [
    CommonModule,
    MatExpansionModule
  ],
  exports: [
    ImgBrokenDirective,
    CodeViewerComponent
  ]
})
export class SharedModule { }
