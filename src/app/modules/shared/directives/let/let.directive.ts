import {
    Directive,
    Input,
    OnInit,
    TemplateRef,
    ViewContainerRef
} from '@angular/core';

class NgLetContext<T> {
    $implicit: T | undefined;
    ngLet: T | undefined;

    setData(value: T): void {
        this.$implicit = value;
        this.ngLet = value;
    }
}

@Directive({
    selector: '[ngLet]',
})
export class NgLetDirective<T = unknown> implements OnInit {
    private _context = new NgLetContext<T>();

    @Input('ngLet') set ngLet(value: T) {
        this._context.setData(value);
    }

    constructor(
        private _viewContainer: ViewContainerRef,
        private templateRef: TemplateRef<NgLetContext<T>>
    ) {
    }

    ngOnInit(): void {
        this._viewContainer.clear();
        this._viewContainer.createEmbeddedView(this.templateRef, this._context);
    }

    static ngTemplateContextGuard<T>(dir: NgLetDirective<T>, ctx: any): ctx is NgLetContext<NonNullable<T>> {
        return true;
    }
}