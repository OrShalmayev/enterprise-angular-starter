import {NgModule} from "@angular/core";
import {GeneralDialogComponent} from "./general-dialog.component";
import {CommonModule} from "@angular/common";

export const COMPONENTS: any[] = [
    GeneralDialogComponent,
];

@NgModule({
    declarations: [...COMPONENTS],
    imports: [CommonModule],
    exports: [...COMPONENTS],
})
export class GeneralDialogModule {
}