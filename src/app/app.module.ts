/**
 * Modules
 */
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {ThemeModule} from './modules/@theme/theme.module';
import {CoreModule} from "./modules/@core/core.module";
import {SharedModule} from "./modules/shared";
import {NGRX_MODULES} from "./state";

/**
 * Components
 */
import {AppLayoutComponent} from './app-layout/app-layout.component';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';


@NgModule({
    declarations: [
        AppComponent,
        AppLayoutComponent,
        HomeComponent,
    ],
    imports: [
        BrowserModule,
        ThemeModule,
        AppRoutingModule,
        CoreModule.forRoot(),
        SharedModule,
        ...NGRX_MODULES,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
