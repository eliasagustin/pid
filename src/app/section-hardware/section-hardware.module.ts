import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { SectionHardwareComponent } from './section-hardware/section-hardware.component';
import { CodeGalleryPaComponent } from './code-gallery-pa/code-gallery-pa.component';
import { VideoViewerComponent } from './video-viewer/video-viewer.component';

@NgModule({
  declarations: [
    SectionHardwareComponent,
    CodeGalleryPaComponent,
    VideoViewerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path:'', component: SectionHardwareComponent}]),
    SharedModule,

  ]
})
export class SectionHardwareModule { }
