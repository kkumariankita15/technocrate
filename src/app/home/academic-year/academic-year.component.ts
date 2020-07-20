import { Component, OnInit } from '@angular/core';
import { dashboardData } from '../../data/dashboardData';
@Component({
  selector: 'app-academic-year',
  templateUrl: './academic-year.component.html',
  styleUrls: ['./academic-year.component.scss'],
})
export class AcademicYearComponent implements OnInit {
  titleHeader = [1, 2, 3, 4, 5];
  classHedaer = [1, 2, 3];
  mainContainer = dashboardData;
  constructor() {}

  ngOnInit(): void {}
}
