/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Injector, Compiler } from '@angular/core';
import * as i0 from "@angular/core";
export class ModLoaderService {
    /**
     * @param {?} compiler
     * @param {?} injector
     */
    constructor(compiler, injector) {
        this.compiler = compiler;
        this.injector = injector;
    }
    /**
     * @param {?} lazyMod
     * @return {?}
     */
    loadLazyModule(lazyMod) {
        console.log(`Loading Module ${lazyMod.name}`);
        return SystemJS.import(lazyMod.url).then((/**
         * @param {?} moduleToCompile
         * @return {?}
         */
        (moduleToCompile) => {
            return this.compiler.compileModuleAsync(moduleToCompile[lazyMod.name]);
        })).then((/**
         * @param {?} modFac
         * @return {?}
         */
        (modFac) => {
            modFac.create(this.injector);
            lazyMod.factory = modFac;
            return lazyMod;
        }));
    }
}
ModLoaderService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ModLoaderService.ctorParameters = () => [
    { type: Compiler },
    { type: Injector }
];
/** @nocollapse */ ModLoaderService.ngInjectableDef = i0.defineInjectable({ factory: function ModLoaderService_Factory() { return new ModLoaderService(i0.inject(i0.Compiler), i0.inject(i0.INJECTOR)); }, token: ModLoaderService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kLWxvYWRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbW9kLWxvYWRlci8iLCJzb3VyY2VzIjpbImxpYi9tb2QtbG9hZGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBa0IsTUFBTSxlQUFlLENBQUM7O0FBTzlFLE1BQU0sT0FBTyxnQkFBZ0I7Ozs7O0lBRTNCLFlBQW9CLFFBQWtCLEVBQ2xCLFFBQWtCO1FBRGxCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtJQUN0QyxDQUFDOzs7OztJQUVELGNBQWMsQ0FBQyxPQUFPO1FBRXBCLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQzlDLE9BQU8sUUFBUSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSTs7OztRQUFDLENBQUMsZUFBZSxFQUFFLEVBQUU7WUFFM0QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUN6RSxDQUFDLEVBQUMsQ0FBQyxJQUFJOzs7O1FBQUMsQ0FBQyxNQUE0QixFQUFFLEVBQUU7WUFDdkMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFFN0IsT0FBTyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7WUFFekIsT0FBTyxPQUFPLENBQUM7UUFDakIsQ0FBQyxFQUFDLENBQUM7SUFFTCxDQUFDOzs7WUF2QkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBTjZCLFFBQVE7WUFBbEIsUUFBUTs7Ozs7Ozs7SUFTZCxvQ0FBMEI7Ozs7O0lBQzFCLG9DQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZSwgSW5qZWN0b3IsIENvbXBpbGVyLCBOZ01vZHVsZUZhY3Rvcnl9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5kZWNsYXJlIGNvbnN0IFN5c3RlbUpTOiBhbnk7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE1vZExvYWRlclNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29tcGlsZXI6IENvbXBpbGVyLFxuICAgICAgICAgICAgICBwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcikge1xuICB9XG5cbiAgbG9hZExhenlNb2R1bGUobGF6eU1vZCkge1xuXG4gICAgY29uc29sZS5sb2coYExvYWRpbmcgTW9kdWxlICR7bGF6eU1vZC5uYW1lfWApO1xuICAgIHJldHVybiBTeXN0ZW1KUy5pbXBvcnQobGF6eU1vZC51cmwpLnRoZW4oKG1vZHVsZVRvQ29tcGlsZSkgPT4ge1xuXG4gICAgICByZXR1cm4gdGhpcy5jb21waWxlci5jb21waWxlTW9kdWxlQXN5bmMobW9kdWxlVG9Db21waWxlW2xhenlNb2QubmFtZV0pO1xuICAgIH0pLnRoZW4oKG1vZEZhYzogTmdNb2R1bGVGYWN0b3J5PGFueT4pID0+IHtcbiAgICAgIG1vZEZhYy5jcmVhdGUodGhpcy5pbmplY3Rvcik7XG5cbiAgICAgIGxhenlNb2QuZmFjdG9yeSA9IG1vZEZhYztcblxuICAgICAgcmV0dXJuIGxhenlNb2Q7XG4gICAgfSk7XG5cbiAgfVxufVxuIl19