import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppLayoutComponent } from './app-layout/app-layout.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThemeModule } from './modules/@theme/theme.module';
import { HomeComponent } from './home/home.component';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './state/app.state';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { CustomSerializer } from './state/router/custome-serializer';

const NGRX_MODULES = [
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
        maxAge: 25,
        logOnly: environment.production,
    }),
    StoreRouterConnectingModule.forRoot({
        serializer: CustomSerializer,
    }),
];
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
    ...NGRX_MODULES,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
