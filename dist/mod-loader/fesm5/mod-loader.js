import { Injectable, Injector, Compiler, Component, NgModule, defineInjectable, inject, INJECTOR } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ModLoaderService = /** @class */ (function () {
    function ModLoaderService(compiler, injector) {
        this.compiler = compiler;
        this.injector = injector;
    }
    /**
     * @param {?} lazyMod
     * @return {?}
     */
    ModLoaderService.prototype.loadLazyModule = /**
     * @param {?} lazyMod
     * @return {?}
     */
    function (lazyMod) {
        var _this = this;
        console.log("Loading Module " + lazyMod.name);
        return SystemJS.import(lazyMod.url).then((/**
         * @param {?} moduleToCompile
         * @return {?}
         */
        function (moduleToCompile) {
            return _this.compiler.compileModuleAndAllComponentsAsync(moduleToCompile[lazyMod.name]);
        })).then((/**
         * @param {?} comp
         * @return {?}
         */
        function (comp) {
            comp.ngModuleFactory.create(_this.injector);
            lazyMod.factory = comp;
            return lazyMod;
        }));
    };
    ModLoaderService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ModLoaderService.ctorParameters = function () { return [
        { type: Compiler },
        { type: Injector }
    ]; };
    /** @nocollapse */ ModLoaderService.ngInjectableDef = defineInjectable({ factory: function ModLoaderService_Factory() { return new ModLoaderService(inject(Compiler), inject(INJECTOR)); }, token: ModLoaderService, providedIn: "root" });
    return ModLoaderService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ModLoaderComponent = /** @class */ (function () {
    function ModLoaderComponent() {
    }
    /**
     * @return {?}
     */
    ModLoaderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    ModLoaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-ModLoader',
                    template: "\n    <p>\n      mod-loader works!\n    </p>\n  "
                }] }
    ];
    /** @nocollapse */
    ModLoaderComponent.ctorParameters = function () { return []; };
    return ModLoaderComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ModLoaderModule = /** @class */ (function () {
    function ModLoaderModule() {
    }
    ModLoaderModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [ModLoaderComponent],
                    imports: [],
                    exports: [ModLoaderComponent]
                },] }
    ];
    return ModLoaderModule;
}());

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