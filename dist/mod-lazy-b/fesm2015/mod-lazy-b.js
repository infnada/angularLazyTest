import { Injectable, Component, NgModule, defineInjectable } from '@angular/core';
import { ModLazyAService } from 'mod-lazy-a';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ModLazyBService {
    constructor() { }
}
ModLazyBService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ModLazyBService.ctorParameters = () => [];
/** @nocollapse */ ModLazyBService.ngInjectableDef = defineInjectable({ factory: function ModLazyBService_Factory() { return new ModLazyBService(); }, token: ModLazyBService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ModLazyBComponent {
    /**
     * @param {?} modLazyAService
     */
    constructor(modLazyAService) {
        this.modLazyAService = modLazyAService;
        console.log('ModLazyB Component constructor');
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        console.log('Getting data from ModLazyB Component constructor');
        console.log('data', this.modLazyAService.getData());
    }
}
ModLazyBComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-ModLazyB',
                template: `
    <p>
      mod-lazy-b works!
    </p>
  `
            }] }
];
/** @nocollapse */
ModLazyBComponent.ctorParameters = () => [
    { type: ModLazyAService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ModLazyBModule {
    /**
     * @param {?} modLazyAService
     */
    constructor(modLazyAService) {
        this.modLazyAService = modLazyAService;
        console.log('ModLazyB Module constructor');
        console.log('Getting data from ModLazyB Module constructor');
        console.log('data', this.modLazyAService.getData());
    }
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
ModLazyBModule.ctorParameters = () => [
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

export { ModLazyBService, ModLazyBComponent, ModLazyBModule };

//# sourceMappingURL=mod-lazy-b.js.map