import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'topics',
  },
  {
    path: 'topics',
    loadChildren: () =>
      import('./section-about/section-about.module').then(
        (m) => m.SectionAboutModule
      ),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./section-contact/section-contact.module').then(
        (m) => m.SectionContactModule
      ),
  },
  {
    path: 'section-intro-pid',
    loadChildren: () =>
      import('./section-intro-pid/section-intro-pid.module').then(
        (m) => m.SectionIntroPidModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports : [RouterModule]
})
export class AppRoutingModule { }

