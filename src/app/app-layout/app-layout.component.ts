import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { RouterHelperService } from '../modules/@core/services';
import { StateComponent } from '../modules/shared/directives/state/state-component.directive';

export interface IAppLayoutState {
    loadingRoute$: Observable<boolean>;
}
@Component({
    selector: 'app-app-layout',
    templateUrl: './app-layout.component.html',
    styleUrls: ['./app-layout.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppLayoutComponent extends StateComponent<IAppLayoutState> {
    state$ = this.selectState();

    constructor(private routerHelper: RouterHelperService) {
        super({ loadingRoute$: routerHelper.loadingRoute$ });
    }

    ngOnInit(): void {}
}
