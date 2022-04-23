import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';

const exports: any[] = [
    NavigationComponent,
    FooterComponent,
];

@NgModule({
  declarations: [
    ...exports,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports,
})
export class ThemeModule { }
