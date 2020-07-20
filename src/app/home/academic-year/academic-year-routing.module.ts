import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcademicYearComponent } from './academic-year.component';

const routes: Routes = [{ path: '', component: AcademicYearComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcademicYearRoutingModule { }
