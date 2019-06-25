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
            return _this.compiler.compileModuleAsync(moduleToCompile[lazyMod.name]);
        })).then((/**
         * @param {?} modFac
         * @return {?}
         */
        function (modFac) {
            modFac.create(_this.injector);
            lazyMod.factory = modFac;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kLWxvYWRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbW9kLWxvYWRlci8iLCJzb3VyY2VzIjpbImxpYi9tb2QtbG9hZGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBa0IsTUFBTSxlQUFlLENBQUM7O0FBSTlFO0lBS0UsMEJBQW9CLFFBQWtCLEVBQ2xCLFFBQWtCO1FBRGxCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtJQUN0QyxDQUFDOzs7OztJQUVELHlDQUFjOzs7O0lBQWQsVUFBZSxPQUFPO1FBQXRCLGlCQWNDO1FBWkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBa0IsT0FBTyxDQUFDLElBQU0sQ0FBQyxDQUFDO1FBQzlDLE9BQU8sUUFBUSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSTs7OztRQUFDLFVBQUMsZUFBZTtZQUV2RCxPQUFPLEtBQUksQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3pFLENBQUMsRUFBQyxDQUFDLElBQUk7Ozs7UUFBQyxVQUFDLE1BQTRCO1lBQ25DLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBRTdCLE9BQU8sQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1lBRXpCLE9BQU8sT0FBTyxDQUFDO1FBQ2pCLENBQUMsRUFBQyxDQUFDO0lBRUwsQ0FBQzs7Z0JBdkJGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBTjZCLFFBQVE7Z0JBQWxCLFFBQVE7OzsyQkFBNUI7Q0E0QkMsQUF4QkQsSUF3QkM7U0FyQlksZ0JBQWdCOzs7Ozs7SUFFZixvQ0FBMEI7Ozs7O0lBQzFCLG9DQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZSwgSW5qZWN0b3IsIENvbXBpbGVyLCBOZ01vZHVsZUZhY3Rvcnl9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5kZWNsYXJlIGNvbnN0IFN5c3RlbUpTOiBhbnk7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE1vZExvYWRlclNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29tcGlsZXI6IENvbXBpbGVyLFxuICAgICAgICAgICAgICBwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcikge1xuICB9XG5cbiAgbG9hZExhenlNb2R1bGUobGF6eU1vZCkge1xuXG4gICAgY29uc29sZS5sb2coYExvYWRpbmcgTW9kdWxlICR7bGF6eU1vZC5uYW1lfWApO1xuICAgIHJldHVybiBTeXN0ZW1KUy5pbXBvcnQobGF6eU1vZC51cmwpLnRoZW4oKG1vZHVsZVRvQ29tcGlsZSkgPT4ge1xuXG4gICAgICByZXR1cm4gdGhpcy5jb21waWxlci5jb21waWxlTW9kdWxlQXN5bmMobW9kdWxlVG9Db21waWxlW2xhenlNb2QubmFtZV0pO1xuICAgIH0pLnRoZW4oKG1vZEZhYzogTmdNb2R1bGVGYWN0b3J5PGFueT4pID0+IHtcbiAgICAgIG1vZEZhYy5jcmVhdGUodGhpcy5pbmplY3Rvcik7XG5cbiAgICAgIGxhenlNb2QuZmFjdG9yeSA9IG1vZEZhYztcblxuICAgICAgcmV0dXJuIGxhenlNb2Q7XG4gICAgfSk7XG5cbiAgfVxufVxuIl19