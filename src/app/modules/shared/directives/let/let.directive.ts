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
    constructor(private _viewContainer: ViewContainerRef, private templateRef: TemplateRef<NgLetContext<T>>) {
    }

    private _context = new NgLetContext<T>();

    static ngTemplateContextGuard<T>(dir: NgLetDirective<T>, ctx: any): ctx is NgLetContext<NonNullable<T>> {
        return true;
    }

    @Input()
    set ngLet(value: T) {
        this._context.setData(value);
    }

    ngOnInit(): void {
        this._viewContainer.clear();
        this._viewContainer.createEmbeddedView(this.templateRef, this._context);
    }
}