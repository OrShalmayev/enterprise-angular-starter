import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from "rxjs";

@Component({
    selector: 'shared-route-loading',
    template: `
		<p>
			route-loading works!
		</p>
    `,
    styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RouteLoadingComponent implements OnInit, OnDestroy {
    componentDestroyed$ = new Subject<void>();

    constructor() {
    }

    ngOnInit(): void {
    }

    ngOnDestroy(): void {
        this.componentDestroyed$.next();
        this.componentDestroyed$.complete();
    }
}
