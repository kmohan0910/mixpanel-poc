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
    mixpanel.init('22cdb2bde4b90098f62bd66b852cd3ba', {
      debug: true,
      loaded: function (mixpanel) {
        console.log(mixpanel);
        mixpanel.get_distinct_id();
        console.log(mixpanel.get_distinct_id());
      },
    });
    mixpanel.identify('mohan@gmail.com');
    mixpanel.track('page_viewed');
  }
}
