import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PageOneComponent} from './page-one.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from "../../shared";
import {AllMaterialModule} from "../../material/material.module";

const ROUTES = [
    {path: '', component: PageOneComponent},
];

const exports: any[] = [
    PageOneComponent,
];

@NgModule({
    declarations: [
        ...exports,
    ],
    imports: [
        CommonModule,
        SharedModule,
        AllMaterialModule,
        RouterModule.forChild(ROUTES),
    ],
    exports,
})
export class PageOneModule {
}
