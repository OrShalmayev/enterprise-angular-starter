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
import {MatDialogModule} from "@angular/material/dialog";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";

export const BASIC_MAT_MODULES:any[] = [
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatFormFieldModule,
];
export const MAT_MODULES:any[] = [
    BASIC_MAT_MODULES,
    MatToolbarModule,
    MatMenuModule,
    MatSidenavModule,
    MatAutocompleteModule,
    MatTabsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatDialogModule,
    MatPaginatorModule,
    MatSlideToggleModule,
];

@NgModule({
    declarations: [],
    imports: [CommonModule, ...MAT_MODULES],
    exports: [MAT_MODULES],
})
export class AllMaterialModule {}

@NgModule({
    declarations: [],
    imports: [CommonModule, ...BASIC_MAT_MODULES],
    exports: [BASIC_MAT_MODULES],
})
export class BasicMaterialModule {}