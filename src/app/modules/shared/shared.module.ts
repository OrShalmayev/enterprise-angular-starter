import {NgModule} from "@angular/core";
import {RouteLoadingComponent} from './components/route-loading/route-loading.component';
import {LetDirective} from "./directives";

const exports: any[] = [
    RouteLoadingComponent,
    LetDirective,
];

@NgModule({
    declarations: [
        ...exports,
    ],
    imports: [
    ],
    providers: [],
    exports: [
        ...exports,
    ],
})
export class SharedModule {
}

