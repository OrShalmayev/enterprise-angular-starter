/**
 * Modules
 */
import {ModuleWithProviders, NgModule} from "@angular/core";
import {NgLetDirective} from "./directives/";
import {CommonModule} from "@angular/common";
/**
 * Components
 */
import {GeneralModalComponent, RouteLoadingComponent, SharedButtonComponent} from "./components";
/**
 * Pipes
 */
import {DefaultPipe} from "./pipes/default";

const COMPONENTS: any[] = [
    RouteLoadingComponent,
    NgLetDirective,
    GeneralModalComponent,
    SharedButtonComponent,
];
const DIRECTIVES: any[] = [
    DefaultPipe,
];
const PIPES: any[] = [];
const MODULES: any[] = [CommonModule];
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

