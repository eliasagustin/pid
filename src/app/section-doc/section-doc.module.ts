import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionDocComponent } from './section-doc/section-doc.component';
import { RouterModule } from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [
    SectionDocComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: SectionDocComponent}]),
    MatExpansionModule
  ]
})
export class SectionDocModule { }
