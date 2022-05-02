import {Directive, Input, OnChanges, SimpleChange, SimpleChanges, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
    selector: '[ngLet]',
    exportAs: 'ngLet'
})
export class LetDirective<T> implements OnChanges {
    @Input('ngLet') ngLet?: T;

    private context: ILetContext<T> = {$implicit: null};

    constructor(
        _viewContainer: ViewContainerRef,
        _templateRef: TemplateRef<ILetContext<T>>
    ) {
        _viewContainer.createEmbeddedView(_templateRef, this.context);
    }

    ngOnChanges(changes: SimpleChanges): void {
        const change: SimpleChange = changes['ngLet'];
        if (change?.previousValue !== change?.currentValue) {
            this.context.$implicit = change.currentValue;
        }
    }
}

interface ILetContext<T> {
    $implicit: T | null;
}
