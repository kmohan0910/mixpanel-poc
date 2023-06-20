import { Component } from '@angular/core';
import mixpanel from 'mixpanel-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'mixpanel-poc';
  constructor() {
    localStorage.setItem('user', '');

    mixpanel.init('22cdb2bde4b90098f62bd66b852cd3ba', {
      debug: true,
    });
    mixpanel.reset();
  }
}
