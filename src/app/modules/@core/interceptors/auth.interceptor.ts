import {
    HttpErrorResponse,
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
} from '@angular/common/http';

import {Inject, Injectable} from '@angular/core';

import {Store} from '@ngrx/store';

import {Observable} from 'rxjs';

import {exhaustMap, take} from 'rxjs/operators';

import {IAppState} from 'src/app/state/app.state';
import {catchAndThrow} from "../utility";
import {WINDOW_TOKEN} from "../tokens";
import {Router} from "@angular/router";


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(
        private state: Store<IAppState>,
        @Inject(WINDOW_TOKEN) private window: Window,
        private router: Router,
    ) {
    }

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        return next.handle(req.clone()).pipe(
            catchAndThrow((err: HttpErrorResponse) => {
                if (err?.status === 401) {
                    const urlRouter = this.router.url;
                    this.window.location.href = this.router
                        .createUrlTree(['login'], {queryParams: {ReturnUrl: urlRouter}})
                        .toString();
                }
            })
        );
        // return this.state.select(getToken).pipe(
        //     take(1),
        //     exhaustMap((token) => {
        //         if (!token) {
        //             return next.handle(req);
        //         }
        //         let modifiedReq = req.clone({
        //             setHeaders: {
        //                 Authorization: `Bearer ${token}`,
        //             },
        //         });
        //         return next.handle(modifiedReq);
        //     })
        // );
    }
}
