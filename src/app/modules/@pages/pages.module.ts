import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import {SharedModule} from "../shared";



@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        PagesRoutingModule,
        SharedModule,
    ],
})
export class PagesModule { }
