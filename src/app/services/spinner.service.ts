import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router, NavigationStart, NavigationEnd, NavigationError, NavigationCancel, Event } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  visibility: BehaviorSubject<boolean>;

  constructor(private router: Router) {
    // this.router.events.subscribe((routerEvent: Event) => {
    //   //debugger
    //   if (routerEvent instanceof NavigationStart) {
    //     this.visibility.next(true);
    //   }
    //   if (routerEvent instanceof NavigationEnd || routerEvent instanceof NavigationError
    //     || routerEvent instanceof NavigationCancel) {
    //     this.visibility.next(false);
    //   }
    // });

    this.visibility = new BehaviorSubject(false);
  }



  show() {
    this.visibility.next(true);
  }

  hide() {
    this.visibility.next(false);
  }
}
