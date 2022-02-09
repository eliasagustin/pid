import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionIntroPidComponent } from './section-intro-pid/section-intro-pid.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SectionIntroPidComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: SectionIntroPidComponent}]),
  ]
})
export class SectionIntroPidModule { }
