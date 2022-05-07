import {ModuleWithProviders, NgModule} from "@angular/core";
import {RouteLoadingComponent} from './components/route-loading/route-loading.component';
import {NgLetDirective} from "./directives/";

const COMPONENTS: any[] = [
    RouteLoadingComponent,
    NgLetDirective,
];
const DIRECTIVES: any[] = [];
const PIPES: any[] = [];
const MODULES: any[] = [];
const EXPORTS: any[] = [];

@NgModule({
    declarations: [...COMPONENTS, ...DIRECTIVES, ...PIPES],
    imports: [...MODULES, ...EXPORTS],
    exports: [...MODULES, ...COMPONENTS, ...PIPES, ...DIRECTIVES, ...EXPORTS],
})
export class SharedModule {
    static forRoot(): ModuleWithProviders<SharedModule> {
        return {
            ngModule: SharedModule,
        };
    }
}

