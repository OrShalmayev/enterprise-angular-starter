import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from "rxjs";

@Component({
    selector: 'shared-route-loading',
    template: `
		<div class="route-loader"></div>
    `,
    styles: [`
        .route-loader {
            --height-of-loader: 4px;
            --loader-color: #0071e2;
            width: 100%;
            height: var(--height-of-loader);
            border-radius: 30px;
            background-color: rgba(0, 0, 0, 0.2);
            position: relative;
        }

        .route-loader::before {
            content: "";
            position: absolute;
            background: var(--loader-color);
            top: 0;
            left: 0;
            width: 0%;
            height: 100%;
            border-radius: 30px;
            animation: moving 1s ease-in-out infinite;;
        }

        @keyframes moving {
            50% {
                width: 100%;
            }

            100% {
                width: 0;
                right: 0;
                left: unset;
            }
        }
    `],
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {'[style.position]': `'relative'`},
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
