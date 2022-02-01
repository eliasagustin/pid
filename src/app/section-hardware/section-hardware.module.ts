import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionHardwareComponent } from './section-hardware/section-hardware.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SectionHardwareComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path:'', component: SectionHardwareComponent}])
  ]
})
export class SectionHardwareModule { }
