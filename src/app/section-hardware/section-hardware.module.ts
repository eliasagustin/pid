import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { SectionHardwareComponent } from './section-hardware/section-hardware.component';
import { CodeGalleryPaComponent } from './code-gallery-pa/code-gallery-pa.component';
import { VideoViewerComponent } from './video-viewer/video-viewer.component';
import { MaterialsComponent } from './materials/materials.component';
import { LearnedLessonsComponent } from './learned-lessons/learned-lessons.component';
import { StlViewerComponent } from './stl-viewer/stl-viewer.component';
import { ObjViewerComponent } from './obj-viewer/obj-viewer.component';
import { CircuitoComponent } from './circuito/circuito.component';

@NgModule({
  declarations: [
    SectionHardwareComponent,
    CodeGalleryPaComponent,
    VideoViewerComponent,
    MaterialsComponent,
    LearnedLessonsComponent,
    StlViewerComponent,
    ObjViewerComponent,
    CircuitoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path:'', component: SectionHardwareComponent}]),
    SharedModule,

  ]
})
export class SectionHardwareModule { }
