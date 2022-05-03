import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PageTwoComponent} from './page-two.component';
import {SharedModule} from "../../shared";

@NgModule({
    declarations: [
        PageTwoComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
    ]
})
export class PageTwoModule {
}
