import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionDownloadComponent } from './section-download/section-download.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SectionDownloadComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: SectionDownloadComponent}])
  ]
})
export class SectionDownloadModule { }
