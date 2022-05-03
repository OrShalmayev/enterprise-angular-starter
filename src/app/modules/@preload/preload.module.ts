import {ModuleWithProviders, NgModule, Provider} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from "../material/material.module";

@NgModule({
    declarations: [],
    imports: [
        CommonModule
    ]
})
export class PreloadModule {
    static allMaterialModules(): ModuleWithProviders<PreloadModule> {
        return {
            ngModule: PreloadModule,
            providers: [...MaterialModule.allModules().providers as Provider[]]
        };
    }
}
