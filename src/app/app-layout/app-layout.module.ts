import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ThemeModule } from "../modules/@theme/theme.module";
import { AppLayoutRoutingModule } from "./app-layout-routing.module";
import { AppLayoutComponent } from "./app-layout.component";

const exports: any[] = [
    AppLayoutComponent,
];
@NgModule({
    imports: [CommonModule, AppLayoutRoutingModule,ThemeModule,],
    declarations: [
        ...exports,
    ],
    exports,
})
export class AppLayoutModule {}