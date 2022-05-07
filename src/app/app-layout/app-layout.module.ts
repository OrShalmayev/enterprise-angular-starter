import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

/**
 * Components
 */
import {ThemeModule} from "../modules/@theme/theme.module";
import {AppRoutingModule} from "../app-routing.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CoreModule} from "../modules/@core/core.module";
import {SharedModule} from "../modules/shared";
import {AppLayoutRoutingModule} from "./app-layout-routing.module";
import {AppLayoutComponent} from "./app-layout.component";
import {HomeComponent} from "../home/home.component";

@NgModule({
    declarations: [
        AppLayoutComponent,
        HomeComponent,
    ],
    imports: [
        CommonModule,
        ThemeModule,
        AppLayoutRoutingModule,
        CoreModule.forRoot(),
        SharedModule.forRoot(),
    ],
})
export class AppLayoutModule {
}
