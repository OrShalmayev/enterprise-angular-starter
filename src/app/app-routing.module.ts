import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '', 
        pathMatch: 'full', 
        loadChildren: ()=> import('./app-layout/app-layout.module').then(m=>m.AppLayoutModule),
        children: [
            
        ]
    },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
