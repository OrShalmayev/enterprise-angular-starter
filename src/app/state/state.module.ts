import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NGRX_MODULES} from "./index";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
      ...NGRX_MODULES
  ],
  exports: [...NGRX_MODULES]
})
export class StateModule { }
