import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionConstrucComponent } from './section-construc/section-construc.component';
import { RouterModule } from '@angular/router';
import { ThreeSixtyModule } from '@mediaman/angular-three-sixty';



@NgModule({
  declarations: [
    SectionConstrucComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: SectionConstrucComponent}]),
    ThreeSixtyModule
  ]
})
export class SectionConstrucModule { }
