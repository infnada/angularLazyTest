(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('mod-lazy-a')) :
    typeof define === 'function' && define.amd ? define('mod-lazy-b', ['exports', '@angular/core', 'mod-lazy-a'], factory) :
    (factory((global['mod-lazy-b'] = {}),global.ng.core,global.modLazyA));
}(this, (function (exports,i0,modLazyA) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ModLazyBService = /** @class */ (function () {
        function ModLazyBService() {
        }
        ModLazyBService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        ModLazyBService.ctorParameters = function () { return []; };
        /** @nocollapse */ ModLazyBService.ngInjectableDef = i0.defineInjectable({ factory: function ModLazyBService_Factory() { return new ModLazyBService(); }, token: ModLazyBService, providedIn: "root" });
        return ModLazyBService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ModLazyBComponent = /** @class */ (function () {
        function ModLazyBComponent(modLazyAService) {
            this.modLazyAService = modLazyAService;
            console.log('ModLazyB Component constructor');
        }
        /**
         * @return {?}
         */
        ModLazyBComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                console.log('Getting data from ModLazyB Component constructor');
                console.log('data', this.modLazyAService.getData());
            };
        ModLazyBComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-ModLazyB',
                        template: "\n    <p>\n      mod-lazy-b works!\n    </p>\n  "
                    }] }
        ];
        /** @nocollapse */
        ModLazyBComponent.ctorParameters = function () {
            return [
                { type: modLazyA.ModLazyAService }
            ];
        };
        return ModLazyBComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ModLazyBModule = /** @class */ (function () {
        function ModLazyBModule(modLazyAService) {
            this.modLazyAService = modLazyAService;
            console.log('ModLazyB Module constructor');
            console.log('Getting data from ModLazyB Module constructor');
            console.log('data', this.modLazyAService.getData());
        }
        ModLazyBModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [ModLazyBComponent],
                        imports: [],
                        exports: [ModLazyBComponent]
                    },] }
        ];
        /** @nocollapse */
        ModLazyBModule.ctorParameters = function () {
            return [
                { type: modLazyA.ModLazyAService }
            ];
        };
        return ModLazyBModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.ModLazyBService = ModLazyBService;
    exports.ModLazyBComponent = ModLazyBComponent;
    exports.ModLazyBModule = ModLazyBModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=mod-lazy-b.umd.js.map