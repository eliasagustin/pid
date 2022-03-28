import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SectionIntroPidComponent } from './section-intro-pid/section-intro-pid.component';
import { IntroComponent } from './intro/intro.component';
import { DescripcionComponent } from './descripcion/descripcion.component';
import { DescripcionAvanzadaComponent } from './descripcion-avanzada/descripcion-avanzada.component';
import { ReferenciasComponent } from './referencias/referencias.component';



@NgModule({
  declarations: [
    SectionIntroPidComponent,
    IntroComponent,
    DescripcionComponent,
    DescripcionAvanzadaComponent,
    ReferenciasComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: SectionIntroPidComponent}])
  ]
})
export class SectionIntroPidModule { }
