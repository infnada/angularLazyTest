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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kLWxvYWRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbW9kLWxvYWRlci8iLCJzb3VyY2VzIjpbImxpYi9tb2QtbG9hZGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBa0IsTUFBTSxlQUFlLENBQUM7O0FBSTlFO0lBS0UsMEJBQW9CLFFBQWtCLEVBQ2xCLFFBQWtCO1FBRGxCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtJQUN0QyxDQUFDOzs7OztJQUVELHlDQUFjOzs7O0lBQWQsVUFBZSxPQUFPO1FBQXRCLGlCQWNDO1FBWkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBa0IsT0FBTyxDQUFDLElBQU0sQ0FBQyxDQUFDO1FBQzlDLE9BQU8sUUFBUSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSTs7OztRQUFDLFVBQUMsZUFBZTtZQUV2RCxPQUFPLEtBQUksQ0FBQyxRQUFRLENBQUMsa0NBQWtDLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3pGLENBQUMsRUFBQyxDQUFDLElBQUk7Ozs7UUFBQyxVQUFDLElBQUk7WUFDWCxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFFM0MsT0FBTyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFFdkIsT0FBTyxPQUFPLENBQUM7UUFDakIsQ0FBQyxFQUFDLENBQUM7SUFFTCxDQUFDOztnQkF2QkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFONkIsUUFBUTtnQkFBbEIsUUFBUTs7OzJCQUE1QjtDQTRCQyxBQXhCRCxJQXdCQztTQXJCWSxnQkFBZ0I7Ozs7OztJQUVmLG9DQUEwQjs7Ozs7SUFDMUIsb0NBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlLCBJbmplY3RvciwgQ29tcGlsZXIsIE5nTW9kdWxlRmFjdG9yeX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmRlY2xhcmUgY29uc3QgU3lzdGVtSlM6IGFueTtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTW9kTG9hZGVyU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb21waWxlcjogQ29tcGlsZXIsXG4gICAgICAgICAgICAgIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yKSB7XG4gIH1cblxuICBsb2FkTGF6eU1vZHVsZShsYXp5TW9kKSB7XG5cbiAgICBjb25zb2xlLmxvZyhgTG9hZGluZyBNb2R1bGUgJHtsYXp5TW9kLm5hbWV9YCk7XG4gICAgcmV0dXJuIFN5c3RlbUpTLmltcG9ydChsYXp5TW9kLnVybCkudGhlbigobW9kdWxlVG9Db21waWxlKSA9PiB7XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXBpbGVyLmNvbXBpbGVNb2R1bGVBbmRBbGxDb21wb25lbnRzQXN5bmMobW9kdWxlVG9Db21waWxlW2xhenlNb2QubmFtZV0pO1xuICAgIH0pLnRoZW4oKGNvbXApID0+IHtcbiAgICAgIGNvbXAubmdNb2R1bGVGYWN0b3J5LmNyZWF0ZSh0aGlzLmluamVjdG9yKTtcblxuICAgICAgbGF6eU1vZC5mYWN0b3J5ID0gY29tcDtcblxuICAgICAgcmV0dXJuIGxhenlNb2Q7XG4gICAgfSk7XG5cbiAgfVxufVxuIl19