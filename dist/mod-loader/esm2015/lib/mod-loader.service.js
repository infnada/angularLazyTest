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
            return this.compiler.compileModuleAndAllComponentsAsync(moduleToCompile[lazyMod.name]);
        })).then((/**
         * @param {?} comp
         * @return {?}
         */
        (comp) => {
            comp.ngModuleFactory.create(this.injector);
            lazyMod.factory = comp;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kLWxvYWRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbW9kLWxvYWRlci8iLCJzb3VyY2VzIjpbImxpYi9tb2QtbG9hZGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBa0IsTUFBTSxlQUFlLENBQUM7O0FBTzlFLE1BQU0sT0FBTyxnQkFBZ0I7Ozs7O0lBRTNCLFlBQW9CLFFBQWtCLEVBQ2xCLFFBQWtCO1FBRGxCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtJQUN0QyxDQUFDOzs7OztJQUVELGNBQWMsQ0FBQyxPQUFPO1FBRXBCLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQzlDLE9BQU8sUUFBUSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSTs7OztRQUFDLENBQUMsZUFBZSxFQUFFLEVBQUU7WUFFM0QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLGtDQUFrQyxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUN6RixDQUFDLEVBQUMsQ0FBQyxJQUFJOzs7O1FBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUNmLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUUzQyxPQUFPLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUV2QixPQUFPLE9BQU8sQ0FBQztRQUNqQixDQUFDLEVBQUMsQ0FBQztJQUVMLENBQUM7OztZQXZCRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFONkIsUUFBUTtZQUFsQixRQUFROzs7Ozs7OztJQVNkLG9DQUEwQjs7Ozs7SUFDMUIsb0NBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlLCBJbmplY3RvciwgQ29tcGlsZXIsIE5nTW9kdWxlRmFjdG9yeX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmRlY2xhcmUgY29uc3QgU3lzdGVtSlM6IGFueTtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTW9kTG9hZGVyU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb21waWxlcjogQ29tcGlsZXIsXG4gICAgICAgICAgICAgIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yKSB7XG4gIH1cblxuICBsb2FkTGF6eU1vZHVsZShsYXp5TW9kKSB7XG5cbiAgICBjb25zb2xlLmxvZyhgTG9hZGluZyBNb2R1bGUgJHtsYXp5TW9kLm5hbWV9YCk7XG4gICAgcmV0dXJuIFN5c3RlbUpTLmltcG9ydChsYXp5TW9kLnVybCkudGhlbigobW9kdWxlVG9Db21waWxlKSA9PiB7XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXBpbGVyLmNvbXBpbGVNb2R1bGVBbmRBbGxDb21wb25lbnRzQXN5bmMobW9kdWxlVG9Db21waWxlW2xhenlNb2QubmFtZV0pO1xuICAgIH0pLnRoZW4oKGNvbXApID0+IHtcbiAgICAgIGNvbXAubmdNb2R1bGVGYWN0b3J5LmNyZWF0ZSh0aGlzLmluamVjdG9yKTtcblxuICAgICAgbGF6eU1vZC5mYWN0b3J5ID0gY29tcDtcblxuICAgICAgcmV0dXJuIGxhenlNb2Q7XG4gICAgfSk7XG5cbiAgfVxufVxuIl19