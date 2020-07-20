import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcademicYearRoutingModule } from './academic-year-routing.module';
import { AcademicYearComponent } from './academic-year.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [AcademicYearComponent],
  imports: [
    CommonModule,
    AcademicYearRoutingModule,
    MatCardModule,
    MatIconModule,
    FlexLayoutModule,
    MatProgressBarModule,
  ],
})
export class AcademicYearModule {}
