import {ModuleWithProviders, NgModule} from "@angular/core";
import {MatButtonModule} from "@angular/material/button";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {MatRadioModule} from "@angular/material/radio";
import {CommonModule} from "@angular/common";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatMenuModule} from "@angular/material/menu";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {MatCardModule} from "@angular/material/card";
import {MatNativeDateModule} from "@angular/material/core";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatTabsModule} from "@angular/material/tabs";
import {MatDatepickerModule} from "@angular/material/datepicker";


export const MAT_BASIC_MODULES = [
    MatButtonModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
];

export const MAT_ALL_MODULES = [
    ...MAT_BASIC_MODULES,
    MatToolbarModule,
    MatMenuModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatAutocompleteModule,
    MatTabsModule,
    MatDatepickerModule,
    MatNativeDateModule
];

@NgModule({
    declarations: [],
    imports: [CommonModule],
    exports: [],
})
export class MaterialModule {
    static basicModules(): ModuleWithProviders<MaterialModule> {
        return {
            ngModule: MaterialModule,
            providers: [
                ...MAT_BASIC_MODULES,
            ]
        };
    }

    static allModules(): ModuleWithProviders<MaterialModule> {
        return {
            ngModule: MaterialModule,
            providers: [
                ...MAT_ALL_MODULES,
            ]
        };
    }
}