import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { RouteConfigLoadEnd, RouteConfigLoadStart, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import * as fromRouterSelectors from '../state/router/router.selector';
import {map} from 'rxjs/operators';
@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss']
})
export class AppLayoutComponent{
    routerEventsLoading$!: any;
    constructor(
        private router:Router,
    ) { }
    ngOnInit(): void {
        this.routerEventsLoading$ = this.router.events.pipe(
            map((event:any) => {
                if (event instanceof RouteConfigLoadStart) {
                    return true;
                } else if (event instanceof RouteConfigLoadEnd) {
                    return false;
                }
                return false
            })
        );
    }
}
