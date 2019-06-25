(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('mod-loader', ['exports', '@angular/core'], factory) :
    (factory((global['mod-loader'] = {}),global.ng.core));
}(this, (function (exports,i0) { 'use strict';

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
                return SystemJS.import(lazyMod.url).then(( /**
                 * @param {?} moduleToCompile
                 * @return {?}
                 */function (moduleToCompile) {
                    return _this.compiler.compileModuleAndAllComponentsAsync(moduleToCompile[lazyMod.name]);
                })).then(( /**
                 * @param {?} comp
                 * @return {?}
                 */function (comp) {
                    comp.ngModuleFactory.create(_this.injector);
                    lazyMod.factory = comp;
                    return lazyMod;
                }));
            };
        ModLoaderService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        ModLoaderService.ctorParameters = function () {
            return [
                { type: i0.Compiler },
                { type: i0.Injector }
            ];
        };
        /** @nocollapse */ ModLoaderService.ngInjectableDef = i0.defineInjectable({ factory: function ModLoaderService_Factory() { return new ModLoaderService(i0.inject(i0.Compiler), i0.inject(i0.INJECTOR)); }, token: ModLoaderService, providedIn: "root" });
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
            { type: i0.Component, args: [{
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
            { type: i0.NgModule, args: [{
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

    exports.ModLoaderService = ModLoaderService;
    exports.ModLoaderComponent = ModLoaderComponent;
    exports.ModLoaderModule = ModLoaderModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=mod-loader.umd.js.map