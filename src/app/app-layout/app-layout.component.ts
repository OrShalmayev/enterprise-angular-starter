import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterHelperService} from '../modules/@core/services/router-helper.service';
import {Observable} from 'rxjs';
import {GeneralModalService} from "../modules/@core/services/general-modal.service";

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
        private generalModalService: GeneralModalService,
    ) {
    }

    ngOnInit(): void {
        this.loadingRoute$ = this.routerHelper.loadingRoute$;
    }

    async openModal(): Promise<void> {
        await this.generalModalService.showLazy(
            () => import('../modules/shared/components/general-modal/general-modal.component').then(m => m.GeneralModalComponent),
            {
                initialState: {},
                class: 'modal-lg',
            }
        );
    }
}
