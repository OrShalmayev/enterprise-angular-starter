import {NgModule} from "@angular/core";
import {RouteLoadingComponent} from './components/route-loading/route-loading.component';
import {NgLetDirective} from "./directives/";

const exports: any[] = [
    RouteLoadingComponent,
    NgLetDirective,
];

@NgModule({
    declarations: [
        ...exports,
    ],
    imports: [
    ],
    providers: [],
    exports,
})
export class SharedModule {
}

