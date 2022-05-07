/**
 * Modules
 */
import {ModuleWithProviders, NgModule} from "@angular/core";
import {NgLetDirective} from "./directives/";
import {CommonModule} from "@angular/common";
/**
 * Components
 */
import {RouteLoadingComponent} from "./components";
/**
 * Pipes
 */
import {DefaultPipe} from "./pipes/default";
import {SharedSpinnerComponent} from './components/shared-spinner/shared-spinner.component';
import {SharedSpinnerDirective} from "./components/shared-spinner/shared-spinner.directive";

const COMPONENTS: any[] = [
    RouteLoadingComponent,
    NgLetDirective,
    SharedSpinnerComponent,
];
const DIRECTIVES: any[] = [
    DefaultPipe,
    SharedSpinnerDirective,
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

