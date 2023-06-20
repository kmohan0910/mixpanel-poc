import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import mixpanel from 'mixpanel-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });
  constructor(private router: Router) {}
  login() {
    if (this.loginForm.get('email')?.value) {
      console.log(this.loginForm.get('email')?.value);
      localStorage.setItem('user', this.loginForm.get('email')?.value!);
    } else {
      localStorage.setItem('user', 'kmohan.r@iosense.io');
    }

    this.router.navigate(['home']);
  }
  logout() {
    localStorage.removeItem('user');
    mixpanel.reset();
  }
}
