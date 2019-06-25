import { Injector, Compiler } from '@angular/core';
export declare class ModLoaderService {
    private compiler;
    private injector;
    constructor(compiler: Compiler, injector: Injector);
    loadLazyModule(lazyMod: any): any;
}
