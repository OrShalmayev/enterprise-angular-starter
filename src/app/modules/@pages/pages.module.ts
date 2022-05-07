import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PagesRoutingModule} from './pages-routing.module';
import {SharedModule} from "../shared";
import {AllMaterialModule} from "../material/material.module";

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        PagesRoutingModule,
        SharedModule,
        AllMaterialModule,
    ],
})
export class PagesModule {
}
