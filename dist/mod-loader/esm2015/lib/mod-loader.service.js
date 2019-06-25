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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kLWxvYWRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbW9kLWxvYWRlci8iLCJzb3VyY2VzIjpbImxpYi9tb2QtbG9hZGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7QUFPN0QsTUFBTSxPQUFPLGdCQUFnQjs7Ozs7SUFFM0IsWUFBb0IsUUFBa0IsRUFDbEIsUUFBa0I7UUFEbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixhQUFRLEdBQVIsUUFBUSxDQUFVO0lBQ3RDLENBQUM7Ozs7O0lBRUQsY0FBYyxDQUFDLE9BQU87UUFFcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7UUFDOUMsT0FBTyxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJOzs7O1FBQUMsQ0FBQyxlQUFlLEVBQUUsRUFBRTtZQUUzRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsa0NBQWtDLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3pGLENBQUMsRUFBQyxDQUFDLElBQUk7Ozs7UUFBQyxDQUFDLElBQUksRUFBRSxFQUFFO1lBQ2YsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBRTNDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBRXZCLE9BQU8sT0FBTyxDQUFDO1FBQ2pCLENBQUMsRUFBQyxDQUFDO0lBRUwsQ0FBQzs7O1lBdkJGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQU42QixRQUFRO1lBQWxCLFFBQVE7Ozs7Ozs7O0lBU2Qsb0NBQTBCOzs7OztJQUMxQixvQ0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGUsIEluamVjdG9yLCBDb21waWxlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmRlY2xhcmUgY29uc3QgU3lzdGVtSlM6IGFueTtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTW9kTG9hZGVyU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb21waWxlcjogQ29tcGlsZXIsXG4gICAgICAgICAgICAgIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yKSB7XG4gIH1cblxuICBsb2FkTGF6eU1vZHVsZShsYXp5TW9kKSB7XG5cbiAgICBjb25zb2xlLmxvZyhgTG9hZGluZyBNb2R1bGUgJHtsYXp5TW9kLm5hbWV9YCk7XG4gICAgcmV0dXJuIFN5c3RlbUpTLmltcG9ydChsYXp5TW9kLnVybCkudGhlbigobW9kdWxlVG9Db21waWxlKSA9PiB7XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXBpbGVyLmNvbXBpbGVNb2R1bGVBbmRBbGxDb21wb25lbnRzQXN5bmMobW9kdWxlVG9Db21waWxlW2xhenlNb2QubmFtZV0pO1xuICAgIH0pLnRoZW4oKGNvbXApID0+IHtcbiAgICAgIGNvbXAubmdNb2R1bGVGYWN0b3J5LmNyZWF0ZSh0aGlzLmluamVjdG9yKTtcblxuICAgICAgbGF6eU1vZC5mYWN0b3J5ID0gY29tcDtcblxuICAgICAgcmV0dXJuIGxhenlNb2Q7XG4gICAgfSk7XG5cbiAgfVxufVxuIl19