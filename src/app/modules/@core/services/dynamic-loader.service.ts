import {Compiler, Injectable, Type} from '@angular/core';

export type LazyFn<T = any> = () => Promise<Type<T>>;

@Injectable({providedIn: 'root'})
export class DynamicLoaderService {
    constructor(private compiler: Compiler) {
    }

    private _loaded = new Set<Type<any>>();
    private _loading = new Map<Type<any>, boolean>();

    async loadModule(moduleFn: LazyFn): Promise<void> {
        const module = await moduleFn();
        if (this._loaded.has(module) || this._loading.has(module)) {
            return;
        }
        this._loading.set(module, true);
        await this.compiler.compileModuleAndAllComponentsAsync(module);
        this._loaded.add(module);
        this._loading.set(module, false);
    }
}
