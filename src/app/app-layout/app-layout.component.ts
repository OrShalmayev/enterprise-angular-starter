import {Component, ComponentFactoryResolver, ViewChild, ViewContainerRef} from '@angular/core';
import {RouteConfigLoadEnd, RouteConfigLoadStart, Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {IAppState} from '../state/app.state';
import * as fromRouterSelectors from '../state/router/router.selector';
import {map} from 'rxjs/operators';
import {RouterHelperService} from '../modules/@core/services/router-helper.service';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-app-layout',
    templateUrl: './app-layout.component.html',
    styleUrls: ['./app-layout.component.scss']
})
export class AppLayoutComponent {
    loadingRoute$!: Observable<boolean>;

    constructor(
        private routerHelper: RouterHelperService,
    ) {
    }

    ngOnInit(): void {
        this.loadingRoute$ = this.routerHelper.loadingRoute$;
    }
}
