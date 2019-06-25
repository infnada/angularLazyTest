import { Injectable, NgModule, Component, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ModLazyAService {
    constructor() {
        this.data = [];
        console.log('ModLazyA Service constructor');
    }
    /**
     * @param {?} data
     * @return {?}
     */
    pushData(data) {
        this.data.push(data);
    }
    /**
     * @return {?}
     */
    getData() {
        return this.data;
    }
}
ModLazyAService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ModLazyAService.ctorParameters = () => [];
/** @nocollapse */ ModLazyAService.ngInjectableDef = defineInjectable({ factory: function ModLazyAService_Factory() { return new ModLazyAService(); }, token: ModLazyAService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ModLazyAComponent {
    /**
     * @param {?} modLazyAService
     */
    constructor(modLazyAService) {
        this.modLazyAService = modLazyAService;
        console.log('ModLazyA Component constructor');
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        console.log('Pushing data from ModLazyA Component ngOnInit');
        this.modLazyAService.pushData('some Data from ModLazyA Component ngOnInit');
    }
}
ModLazyAComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-ModLazyA',
                template: `
    <p>
      mod-lazy-a works!
    </p>
  `
            }] }
];
/** @nocollapse */
ModLazyAComponent.ctorParameters = () => [
    { type: ModLazyAService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ModLazyAModule {
    /**
     * @param {?} modLazyAService
     */
    constructor(modLazyAService) {
        this.modLazyAService = modLazyAService;
        console.log('ModLazyA Module constructor');
        console.log('Pushing data from ModLazyA Module constructor');
        this.modLazyAService.pushData('some Data from ModLazyA Module constructor');
    }
}
ModLazyAModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ModLazyAComponent],
                imports: [],
                exports: [ModLazyAComponent]
            },] }
];
/** @nocollapse */
ModLazyAModule.ctorParameters = () => [
    { type: ModLazyAService }
];

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