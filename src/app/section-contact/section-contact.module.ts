import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionContactComponent } from './section-contact/section-contact.component';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';



@NgModule({
  declarations: [
    SectionContactComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: SectionContactComponent}]),
    MatListModule
  ]
})
export class SectionContactModule { }
