import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable, Injector } from '@angular/core';
import mixpanel from 'mixpanel-browser';
@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    console.log(
      route,
      localStorage.getItem('user'),
      route.routeConfig?.path,
      'route'
    );
    if (localStorage.getItem('user')) {
      const id: string = localStorage.getItem('user') || '';

      if (route.routeConfig?.path != 'home') {
        // mixpanel.people.set(id);
        mixpanel.identify(localStorage.getItem('user')!);
        mixpanel.track('page_viewed', {
          entity: route.routeConfig?.path,
        });
        mixpanel.people.set_once({
          name: localStorage.getItem('user')?.split('@')[0],
          $email: localStorage.getItem('user'),
          $lastupdate: Date.now(),
        });
      }

      return true;
    } else {
      window.location.href = `${window.location.origin}/login`;
      return false;
    }
  }
}
