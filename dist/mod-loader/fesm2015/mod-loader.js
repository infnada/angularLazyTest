import { Injectable, Injector, Compiler, Component, NgModule, defineInjectable, inject, INJECTOR } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ModLoaderService {
    /**
     * @param {?} compiler
     * @param {?} injector
     */
    constructor(compiler, injector) {
        this.compiler = compiler;
        this.injector = injector;
    }
    /**
     * @param {?} lazyMod
     * @return {?}
     */
    loadLazyModule(lazyMod) {
        console.log(`Loading Module ${lazyMod.name}`);
        return SystemJS.import(lazyMod.url).then((/**
         * @param {?} moduleToCompile
         * @return {?}
         */
        (moduleToCompile) => {
            return this.compiler.compileModuleAndAllComponentsAsync(moduleToCompile[lazyMod.name]);
        })).then((/**
         * @param {?} comp
         * @return {?}
         */
        (comp) => {
            comp.ngModuleFactory.create(this.injector);
            lazyMod.factory = comp;
            return lazyMod;
        }));
    }
}
ModLoaderService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ModLoaderService.ctorParameters = () => [
    { type: Compiler },
    { type: Injector }
];
/** @nocollapse */ ModLoaderService.ngInjectableDef = defineInjectable({ factory: function ModLoaderService_Factory() { return new ModLoaderService(inject(Compiler), inject(INJECTOR)); }, token: ModLoaderService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ModLoaderComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
ModLoaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-ModLoader',
                template: `
    <p>
      mod-loader works!
    </p>
  `
            }] }
];
/** @nocollapse */
ModLoaderComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ModLoaderModule {
}
ModLoaderModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ModLoaderComponent],
                imports: [],
                exports: [ModLoaderComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { ModLoaderService, ModLoaderComponent, ModLoaderModule };

//# sourceMappingURL=mod-loader.js.map