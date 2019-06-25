/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { ModLazyAService } from 'mod-lazy-a';
import { ModLazyBComponent } from './mod-lazy-b.component';
export class ModLazyBModule {
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
if (false) {
    /**
     * @type {?}
     * @private
     */
    ModLazyBModule.prototype.modLazyAService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kLWxhenktYi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tb2QtbGF6eS1iLyIsInNvdXJjZXMiOlsibGliL21vZC1sYXp5LWIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXZDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxZQUFZLENBQUM7QUFFM0MsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFVekQsTUFBTSxPQUFPLGNBQWM7Ozs7SUFDekIsWUFBb0IsZUFBZ0M7UUFBaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2xELE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLENBQUMsQ0FBQztRQUUzQyxPQUFPLENBQUMsR0FBRyxDQUFDLCtDQUErQyxDQUFDLENBQUM7UUFDN0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQ3RELENBQUM7OztZQWRGLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztnQkFDakMsT0FBTyxFQUFFLEVBQUU7Z0JBQ1gsT0FBTyxFQUFFLENBQUMsaUJBQWlCLENBQUM7Z0JBQzVCLFNBQVMsRUFBRTtvQkFDVCxlQUFlO2lCQUNoQjthQUNGOzs7O1lBWE8sZUFBZTs7Ozs7OztJQWFULHlDQUF3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge01vZExhenlBU2VydmljZX0gZnJvbSAnbW9kLWxhenktYSc7XG5cbmltcG9ydCB7TW9kTGF6eUJDb21wb25lbnR9IGZyb20gJy4vbW9kLWxhenktYi5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtNb2RMYXp5QkNvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtdLFxuICBleHBvcnRzOiBbTW9kTGF6eUJDb21wb25lbnRdLFxuICBwcm92aWRlcnM6IFtcbiAgICBNb2RMYXp5QVNlcnZpY2VcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBNb2RMYXp5Qk1vZHVsZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbW9kTGF6eUFTZXJ2aWNlOiBNb2RMYXp5QVNlcnZpY2UpIHtcbiAgICBjb25zb2xlLmxvZygnTW9kTGF6eUIgTW9kdWxlIGNvbnN0cnVjdG9yJyk7XG5cbiAgICBjb25zb2xlLmxvZygnR2V0dGluZyBkYXRhIGZyb20gTW9kTGF6eUIgTW9kdWxlIGNvbnN0cnVjdG9yJyk7XG4gICAgY29uc29sZS5sb2coJ2RhdGEnLCB0aGlzLm1vZExhenlBU2VydmljZS5nZXREYXRhKCkpO1xuICB9XG59XG4iXX0=