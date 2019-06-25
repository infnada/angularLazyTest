/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { ModLazyAService } from 'mod-lazy-a';
import { ModLazyBComponent } from './mod-lazy-b.component';
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
                    exports: [ModLazyBComponent]
                },] }
    ];
    /** @nocollapse */
    ModLazyBModule.ctorParameters = function () { return [
        { type: ModLazyAService }
    ]; };
    return ModLazyBModule;
}());
export { ModLazyBModule };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ModLazyBModule.prototype.modLazyAService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kLWxhenktYi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tb2QtbGF6eS1iLyIsInNvdXJjZXMiOlsibGliL21vZC1sYXp5LWIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFFN0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFM0Q7SUFPRSx3QkFBb0IsZUFBZ0M7UUFBaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2xELE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLENBQUMsQ0FBQztRQUUzQyxPQUFPLENBQUMsR0FBRyxDQUFDLCtDQUErQyxDQUFDLENBQUM7UUFDN0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQ3RELENBQUM7O2dCQVpGLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztvQkFDakMsT0FBTyxFQUFFLEVBQ1I7b0JBQ0QsT0FBTyxFQUFFLENBQUMsaUJBQWlCLENBQUM7aUJBQzdCOzs7O2dCQVRRLGVBQWU7O0lBaUJ4QixxQkFBQztDQUFBLEFBYkQsSUFhQztTQVBZLGNBQWM7Ozs7OztJQUNiLHlDQUF3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE1vZExhenlBU2VydmljZSB9IGZyb20gJ21vZC1sYXp5LWEnO1xuXG5pbXBvcnQgeyBNb2RMYXp5QkNvbXBvbmVudCB9IGZyb20gJy4vbW9kLWxhenktYi5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtNb2RMYXp5QkNvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtcbiAgXSxcbiAgZXhwb3J0czogW01vZExhenlCQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBNb2RMYXp5Qk1vZHVsZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbW9kTGF6eUFTZXJ2aWNlOiBNb2RMYXp5QVNlcnZpY2UpIHtcbiAgICBjb25zb2xlLmxvZygnTW9kTGF6eUIgTW9kdWxlIGNvbnN0cnVjdG9yJyk7XG5cbiAgICBjb25zb2xlLmxvZygnR2V0dGluZyBkYXRhIGZyb20gTW9kTGF6eUIgTW9kdWxlIGNvbnN0cnVjdG9yJyk7XG4gICAgY29uc29sZS5sb2coJ2RhdGEnLCB0aGlzLm1vZExhenlBU2VydmljZS5nZXREYXRhKCkpO1xuICB9XG59XG4iXX0=