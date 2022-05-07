import {ChangeDetectionStrategy, Component, HostBinding, Input, OnInit} from '@angular/core';
import {BooleanInput, coerceBooleanProperty} from "@angular/cdk/coercion";
import {TSharedSpinnerSize} from "./shared-spinner.types";

@Component({
    selector: 'shared-spinner',
    templateUrl: './shared-spinner.component.html',
    styleUrls: ['./shared-spinner.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SharedSpinnerComponent implements OnInit {
    static ngAcceptInputType_fullScreen: BooleanInput;

    private _fullScreen = false;

    @Input('zIndex') zIndex = 999999;
    @Input('borderRadius') borderRadius!: string;
    @Input() @HostBinding('class.shared-spinner__overlay') overlay = true;
    @Input() @HostBinding('class.shared-spinner__overlay--no-background') noBackground = false;
    @Input('size') size: TSharedSpinnerSize = 'default';

    @HostBinding('style.z-index')
    get zIndexStyle(): number {
        return this.overlay ? this.zIndex : 0;
    }

    @Input()
    @HostBinding('class.shared-spinner__overlay--fullscreen')
    set fullScreen(fullScreen: boolean) {
        this._fullScreen = coerceBooleanProperty(fullScreen);
    }

    get fullScreen(): boolean {
        return this._fullScreen;
    }

    ngOnInit(): void {
    }
}
