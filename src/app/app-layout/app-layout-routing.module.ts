import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './app-layout.component';
import { HomeComponent } from '../home/home.component';

const routes: Routes = [
    {
        path: '',
        component: AppLayoutComponent,
        children: [
            {
                path: 'pages',
                loadChildren: () => import('../modules/@pages/pages.module').then((m) => m.PagesModule),
            },
            {
                path: '',
                component: HomeComponent,
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AppLayoutRoutingModule {}
