import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({
    email: new FormControl('admin@admin.com', [Validators.required]),
    password: new FormControl('admin', [Validators.required]),
  });
  submitted = false;
  constructor(private router: Router) {}

  ngOnInit(): void {}
  submit() {
    this.submitted = true;
    if (this.form.valid) {
      this.router.navigate(['/home']);
    }
  }
}
