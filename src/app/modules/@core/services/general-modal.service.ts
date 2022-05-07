import {Inject, Injectable, Optional, Renderer2, RendererFactory2, TemplateRef} from "@angular/core";
import {DOCUMENT} from "@angular/common";
import {BsModalRef, BsModalService, MODAL_CONFIG_DEFAULT_OVERRIDE, ModalOptions} from "ngx-bootstrap/modal";
import {DynamicLoaderService, LazyFn} from "./dynamic-loader.service";
import {ComponentLoaderFactory} from "ngx-bootstrap/component-loader";

let uniqueId = Number.MIN_SAFE_INTEGER;

@Injectable({providedIn: 'root'})
export class GeneralModalService extends BsModalService {
    renderer2: Renderer2;

    constructor(
        private dynamicLoaderService: DynamicLoaderService,
        private rendererFactory2: RendererFactory2,
        componentLoaderFactory: ComponentLoaderFactory,
        @Optional() @Inject(MODAL_CONFIG_DEFAULT_OVERRIDE) modalDefaultOptions: ModalOptions,
        @Inject(DOCUMENT) private document: Document
    ) {
        super(rendererFactory2, componentLoaderFactory, modalDefaultOptions);
        this.renderer2 = this.rendererFactory2.createRenderer(null, null);
    }


    async showLazy<T>(componentFn: LazyFn<T>, config?: ModalOptions<T> & { module?: LazyFn }): Promise<BsModalRef<T>> {
        if (config?.module) {
            await this.dynamicLoaderService.loadModule(config.module);
        }
        return this.show<T>(await componentFn(), config);
    }

    show<T = any>(
        content: string | TemplateRef<any> | (new (...args: any[]) => T),
        config?: ModalOptions<T>
    ): BsModalRef<T> {
        this.renderer2.addClass(this.document.documentElement, 'modal-open');
        return super.show(content, {...config, id: config?.id ?? uniqueId++});
    }

    hide(id?: number): void {
        if (this.getModalsCount() === 1) {
            this.renderer2.removeClass(this.document.documentElement, 'modal-open');
        }
        super.hide(id);
    }
}
