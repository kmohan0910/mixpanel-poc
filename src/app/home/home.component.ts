import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import mixpanel from 'mixpanel-browser';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private http: HttpClient, private router: Router) {
    // mixpanel.identify('mohan@gmail.com');
    // mixpanel.track('page_viewed');
  }
  ngOnInit(): void {}
  logout() {
    this.router.navigate(['/login']);
    mixpanel.reset();
  }
}
