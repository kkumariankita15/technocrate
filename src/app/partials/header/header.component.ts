import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { headerList } from '../../data/navList';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isCollapsed = true;
  navData = headerList;
  constructor(public router: Router) {}

  ngOnInit(): void {}
}
