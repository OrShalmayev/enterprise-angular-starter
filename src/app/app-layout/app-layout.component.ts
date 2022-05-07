import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Observable} from 'rxjs';
import {RouterHelperService} from "../modules/@core/services";

@Component({
    selector: 'app-app-layout',
    templateUrl: './app-layout.component.html',
    styleUrls: ['./app-layout.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppLayoutComponent {
    loadingRoute$!: Observable<boolean>;
    test: any;

    constructor(
        private routerHelper: RouterHelperService,

    ) {
    }

    ngOnInit(): void {
        this.loadingRoute$ = this.routerHelper.loadingRoute$;
    }
}
