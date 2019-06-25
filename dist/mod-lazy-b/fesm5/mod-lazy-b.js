import { Injectable, Component, NgModule, defineInjectable } from '@angular/core';
import { ModLazyAService } from 'mod-lazy-a';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ModLazyBService = /** @class */ (function () {
    function ModLazyBService() {
    }
    ModLazyBService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ModLazyBService.ctorParameters = function () { return []; };
    /** @nocollapse */ ModLazyBService.ngInjectableDef = defineInjectable({ factory: function ModLazyBService_Factory() { return new ModLazyBService(); }, token: ModLazyBService, providedIn: "root" });
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
        { type: Component, args: [{
                    selector: 'lib-ModLazyB',
                    template: "\n    <p>\n      mod-lazy-b works!\n    </p>\n  "
                }] }
    ];
    /** @nocollapse */
    ModLazyBComponent.ctorParameters = function () { return [
        { type: ModLazyAService }
    ]; };
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
        { type: NgModule, args: [{
                    declarations: [ModLazyBComponent],
                    imports: [],
                    exports: [ModLazyBComponent],
                    providers: [
                        ModLazyAService
                    ]
                },] }
    ];
    /** @nocollapse */
    ModLazyBModule.ctorParameters = function () { return [
        { type: ModLazyAService }
    ]; };
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

export { ModLazyBService, ModLazyBComponent, ModLazyBModule };

//# sourceMappingURL=mod-lazy-b.js.map