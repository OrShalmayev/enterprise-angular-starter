import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CustomPreloadingStrategyService} from "./modules/@core/services";

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                loadChildren: () =>
                    import('./app-layout/app-layout.module').then(m => m.AppLayoutModule),
            },
        ]
    },
    {
        path: 'preload-NGRX',
        data: {preload: true, loadAfterSeconds: 0},
        loadChildren: () => import('./state/state.module').then(m => m.StateModule),
        redirectTo: ''
    },
    {
        path: 'preload-basic-material-modules',
        data: {preload: true, loadAfterSeconds: 0},
        loadChildren: () => import('./modules/material/material.module').then(m => m.BasicMaterialModule),
        redirectTo: ''
    },
    {
        path: 'preload-all-material-modules',
        data: {preload: true, loadAfterSeconds: 0},
        loadChildren: () => import('./modules/material/material.module').then(m => m.AllMaterialModule),
        redirectTo: ''
    },
    {
        path: '**',
        redirectTo: '',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        preloadingStrategy: CustomPreloadingStrategyService,
        paramsInheritanceStrategy: 'always',
        enableTracing: false,
        scrollPositionRestoration: 'enabled',
    }),
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
