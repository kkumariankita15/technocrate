import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

const routes: Routes = [
  // { path: '', redirectTo: 'academicYear', pathMatch: 'full' },
  {
    path: '',
    loadChildren: () =>
      import('./academic-year/academic-year.module').then(
        (m) => m.AcademicYearModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
