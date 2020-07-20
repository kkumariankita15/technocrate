import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  constructor() {}

  ngOnInit(): void {}

  subscribe() {
    if (!this.email.errors) {
      // submit form
    }
  }
}
