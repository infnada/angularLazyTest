/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Injector, Compiler } from '@angular/core';
import * as i0 from "@angular/core";
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
    /** @nocollapse */ ModLoaderService.ngInjectableDef = i0.defineInjectable({ factory: function ModLoaderService_Factory() { return new ModLoaderService(i0.inject(i0.Compiler), i0.inject(i0.INJECTOR)); }, token: ModLoaderService, providedIn: "root" });
    return ModLoaderService;
}());
export { ModLoaderService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ModLoaderService.prototype.compiler;
    /**
     * @type {?}
     * @private
     */
    ModLoaderService.prototype.injector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kLWxvYWRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbW9kLWxvYWRlci8iLCJzb3VyY2VzIjpbImxpYi9tb2QtbG9hZGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7QUFJN0Q7SUFLRSwwQkFBb0IsUUFBa0IsRUFDbEIsUUFBa0I7UUFEbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixhQUFRLEdBQVIsUUFBUSxDQUFVO0lBQ3RDLENBQUM7Ozs7O0lBRUQseUNBQWM7Ozs7SUFBZCxVQUFlLE9BQU87UUFBdEIsaUJBY0M7UUFaQyxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFrQixPQUFPLENBQUMsSUFBTSxDQUFDLENBQUM7UUFDOUMsT0FBTyxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJOzs7O1FBQUMsVUFBQyxlQUFlO1lBRXZELE9BQU8sS0FBSSxDQUFDLFFBQVEsQ0FBQyxrQ0FBa0MsQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDekYsQ0FBQyxFQUFDLENBQUMsSUFBSTs7OztRQUFDLFVBQUMsSUFBSTtZQUNYLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUUzQyxPQUFPLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUV2QixPQUFPLE9BQU8sQ0FBQztRQUNqQixDQUFDLEVBQUMsQ0FBQztJQUVMLENBQUM7O2dCQXZCRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQU42QixRQUFRO2dCQUFsQixRQUFROzs7MkJBQTVCO0NBNEJDLEFBeEJELElBd0JDO1NBckJZLGdCQUFnQjs7Ozs7O0lBRWYsb0NBQTBCOzs7OztJQUMxQixvQ0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGUsIEluamVjdG9yLCBDb21waWxlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmRlY2xhcmUgY29uc3QgU3lzdGVtSlM6IGFueTtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTW9kTG9hZGVyU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb21waWxlcjogQ29tcGlsZXIsXG4gICAgICAgICAgICAgIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yKSB7XG4gIH1cblxuICBsb2FkTGF6eU1vZHVsZShsYXp5TW9kKSB7XG5cbiAgICBjb25zb2xlLmxvZyhgTG9hZGluZyBNb2R1bGUgJHtsYXp5TW9kLm5hbWV9YCk7XG4gICAgcmV0dXJuIFN5c3RlbUpTLmltcG9ydChsYXp5TW9kLnVybCkudGhlbigobW9kdWxlVG9Db21waWxlKSA9PiB7XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXBpbGVyLmNvbXBpbGVNb2R1bGVBbmRBbGxDb21wb25lbnRzQXN5bmMobW9kdWxlVG9Db21waWxlW2xhenlNb2QubmFtZV0pO1xuICAgIH0pLnRoZW4oKGNvbXApID0+IHtcbiAgICAgIGNvbXAubmdNb2R1bGVGYWN0b3J5LmNyZWF0ZSh0aGlzLmluamVjdG9yKTtcblxuICAgICAgbGF6eU1vZC5mYWN0b3J5ID0gY29tcDtcblxuICAgICAgcmV0dXJuIGxhenlNb2Q7XG4gICAgfSk7XG5cbiAgfVxufVxuIl19