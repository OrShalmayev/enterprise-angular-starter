import {StoreModule} from "@ngrx/store";
import {appReducer} from "./app.state";
import {EffectsModule} from "@ngrx/effects";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {environment} from "../../environments/environment";
import {StoreRouterConnectingModule} from "@ngrx/router-store";
import {CustomSerializer} from "./router/custome-serializer";

export const NGRX_MODULES:any[] = [
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