import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionContactComponent } from './section-contact/section-contact.component';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { ContactComponent } from './contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';




@NgModule({
  declarations: [
    SectionContactComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule.forChild([{path: '', component: SectionContactComponent}]),
    MatListModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ]
})
export class SectionContactModule { }
