import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';

const exports: any[] = [
    NavigationComponent,
    FooterComponent,
];

@NgModule({
  declarations: [
    ...exports,
  ],
  imports: [
    CommonModule
  ],
  exports,
})
export class themeModule { }
