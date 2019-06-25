import { Injectable, Component, NgModule, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ModLazyAService = /** @class */ (function () {
    function ModLazyAService() {
        this.data = [];
        console.log('ModLazyA Service constructor');
    }
    /**
     * @param {?} data
     * @return {?}
     */
    ModLazyAService.prototype.pushData = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        this.data.push(data);
    };
    /**
     * @return {?}
     */
    ModLazyAService.prototype.getData = /**
     * @return {?}
     */
    function () {
        return this.data;
    };
    ModLazyAService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ModLazyAService.ctorParameters = function () { return []; };
    /** @nocollapse */ ModLazyAService.ngInjectableDef = defineInjectable({ factory: function ModLazyAService_Factory() { return new ModLazyAService(); }, token: ModLazyAService, providedIn: "root" });
    return ModLazyAService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ModLazyAComponent = /** @class */ (function () {
    function ModLazyAComponent(modLazyAService) {
        this.modLazyAService = modLazyAService;
        console.log('ModLazyA Component constructor');
    }
    /**
     * @return {?}
     */
    ModLazyAComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        console.log('Pushing data from ModLazyA Component ngOnInit');
        this.modLazyAService.pushData('some Data from ModLazyA Component ngOnInit');
        console.log('data', this.modLazyAService.getData());
    };
    ModLazyAComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-ModLazyA',
                    template: "\n    <p>\n      mod-lazy-a works!\n    </p>\n  "
                }] }
    ];
    /** @nocollapse */
    ModLazyAComponent.ctorParameters = function () { return [
        { type: ModLazyAService }
    ]; };
    return ModLazyAComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ModLazyAModule = /** @class */ (function () {
    function ModLazyAModule(modLazyAService) {
        this.modLazyAService = modLazyAService;
        console.log('ModLazyA Module constructor');
        console.log('Pushing data from ModLazyA Module constructor');
        this.modLazyAService.pushData('some Data from ModLazyA Module constructor');
        console.log('data', this.modLazyAService.getData());
    }
    ModLazyAModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [ModLazyAComponent],
                    imports: [],
                    exports: [ModLazyAComponent]
                },] }
    ];
    /** @nocollapse */
    ModLazyAModule.ctorParameters = function () { return [
        { type: ModLazyAService }
    ]; };
    return ModLazyAModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { ModLazyAService, ModLazyAComponent, ModLazyAModule };

//# sourceMappingURL=mod-lazy-a.js.map