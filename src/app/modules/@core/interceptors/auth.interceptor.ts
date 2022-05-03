import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
} from '@angular/common/http';

import {Injectable} from '@angular/core';

import {Store} from '@ngrx/store';

import {Observable} from 'rxjs';

import {exhaustMap, take} from 'rxjs/operators';

import {IAppState} from 'src/app/state/app.state';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(
        private state: Store<IAppState>
    ) {
    }

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        return next.handle(req.clone());
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
