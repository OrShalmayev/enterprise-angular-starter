import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppLayoutComponent} from './app-layout/app-layout.component';
import {HomeComponent} from './home/home.component';
import {CustomPreloadingStrategyService} from "./modules/@core/services/custom-preloading-strategy.service";

const routes: Routes = [
    {
        path: '',
        component: AppLayoutComponent,
        children: [
            {
                path: 'pages',
                loadChildren: () =>
                    import('./modules/@pages/pages.module').then(m => m.PagesModule),
            },
            {
                path: '',
                component: HomeComponent
            }
        ]
    },
    {
        path: 'preload-all-material-modules',
        data: {preload: true, loadAfterSeconds: 5},
        loadChildren: () => import('./modules/@preload/preload.module').then(m => m.PreloadModule.allMaterialModules()),
        redirectTo: ''
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {preloadingStrategy: CustomPreloadingStrategyService})],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
