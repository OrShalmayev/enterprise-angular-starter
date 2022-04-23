import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageOneComponent } from './page-one.component';
import { RouterModule } from '@angular/router';


const exports: any[] = [
    PageOneComponent,
]
@NgModule({
  declarations: [
      ...exports,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
        {path: '', component: PageOneComponent},
    ])
  ],
  exports,
})
export class PageOneModule { }
