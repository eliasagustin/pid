import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionAboutComponent } from './section-about/section-about.component';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [
    SectionAboutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: SectionAboutComponent}]),
    MatCardModule,
    MatButtonModule,
    SharedModule
  ]
})
export class SectionAboutModule { }
