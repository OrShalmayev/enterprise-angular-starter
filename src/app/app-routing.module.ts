import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './app-layout/app-layout.component';

const routes: Routes = [
    {
        path: '', 
        component: AppLayoutComponent,
        children: [
            {
                path: 'pages', 
                loadChildren: () => 
                    import('./modules/@pages/pages.module').then(m => m.PagesModule)
            }
        ]
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
