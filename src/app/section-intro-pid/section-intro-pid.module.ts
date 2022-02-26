import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SectionIntroPidComponent } from './section-intro-pid/section-intro-pid.component';



@NgModule({
  declarations: [
    SectionIntroPidComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: SectionIntroPidComponent}])
  ]
})
export class SectionIntroPidModule { }
