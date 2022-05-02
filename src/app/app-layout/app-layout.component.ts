import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterHelperService} from '../modules/@core/services/router-helper.service';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-app-layout',
    templateUrl: './app-layout.component.html',
    styleUrls: ['./app-layout.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
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
