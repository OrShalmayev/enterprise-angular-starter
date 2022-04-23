import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './app-layout.component';

const routes: Routes = [
    {
        path: '', 
        component: AppLayoutComponent,
        children: [
            {
                path: 'page-1',
                loadChildren: () => import('../modules/@pages/page-one/page-one.module').then(m => m.PageOneModule),
            }
        ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppLayoutRoutingModule { }
