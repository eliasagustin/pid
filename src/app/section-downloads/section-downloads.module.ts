import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionDownloadsComponent } from './section-downloads/section-downloads.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { GalleryComponent } from './gallery/gallery.component';



@NgModule({
  declarations: [
    SectionDownloadsComponent,
    GalleryComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path:'', component: SectionDownloadsComponent}]),
    SharedModule,
  ]
})
export class SectionDownloadsModule { }
