import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'section-intro-pid',
  },
  {
    path: 'section-downloads',
    loadChildren: () =>
      import('./section-downloads/section-downloads.module').then(
        (m) => m.SectionDownloadsModule
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
    path: 'doc',
    loadChildren: () =>
      import('./section-doc/section-doc.module').then(
        (m) => m.SectionDocModule
      ),
  },
  {
    path: 'section-intro-pid',
    loadChildren: () =>
      import('./section-intro-pid/section-intro-pid.module').then(
        (m) => m.SectionIntroPidModule
      ),
  },
  {
    path: 'section-construc',
    loadChildren: () =>
      import('./section-construc/section-construc.module').then(
        (m) => m.SectionConstrucModule
      ),
  },
  {
    path: 'section-hardware',
    loadChildren: () =>
      import('./section-hardware/section-hardware.module').then(
        (m) => m.SectionHardwareModule
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

