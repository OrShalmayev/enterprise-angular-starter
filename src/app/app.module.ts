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

/**
 * Tokens
 */
import {WINDOW_TOKEN} from "./modules/@core/tokens";
import {DEFAULT_PIPE_TYPE, TDefaultPipeType} from "./modules/shared/pipes/default";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


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
        SharedModule.forRoot(),
        ...NGRX_MODULES,
        NgbModule,
    ],
    providers: [
        {provide: WINDOW_TOKEN, useValue: window},
        {
            provide: DEFAULT_PIPE_TYPE,
            useValue: 'strict' as TDefaultPipeType,
        },
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
