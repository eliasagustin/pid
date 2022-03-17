import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionHardwareComponent } from './section-hardware/section-hardware.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    SectionHardwareComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path:'', component: SectionHardwareComponent}]),
    SharedModule
  ]
})
export class SectionHardwareModule { }
