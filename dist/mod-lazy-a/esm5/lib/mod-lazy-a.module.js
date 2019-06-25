/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { ModLazyAComponent } from './mod-lazy-a.component';
import { ModLazyAService } from './mod-lazy-a.service';
var ModLazyAModule = /** @class */ (function () {
    function ModLazyAModule(modLazyAService) {
        this.modLazyAService = modLazyAService;
        console.log('ModLazyA Module constructor');
        console.log('Pushing data from ModLazyA Module constructor');
        this.modLazyAService.pushData('some Data from ModLazyA Module constructor');
    }
    ModLazyAModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [ModLazyAComponent],
                    imports: [],
                    exports: [ModLazyAComponent]
                },] }
    ];
    /** @nocollapse */
    ModLazyAModule.ctorParameters = function () { return [
        { type: ModLazyAService }
    ]; };
    return ModLazyAModule;
}());
export { ModLazyAModule };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ModLazyAModule.prototype.modLazyAService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kLWxhenktYS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tb2QtbGF6eS1hLyIsInNvdXJjZXMiOlsibGliL21vZC1sYXp5LWEubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzNELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUV2RDtJQU9FLHdCQUFvQixlQUFnQztRQUFoQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDbEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO1FBRTNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsK0NBQStDLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDO0lBQzlFLENBQUM7O2dCQVpGLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztvQkFDakMsT0FBTyxFQUFFLEVBQ1I7b0JBQ0QsT0FBTyxFQUFFLENBQUMsaUJBQWlCLENBQUM7aUJBQzdCOzs7O2dCQVBRLGVBQWU7O0lBZXhCLHFCQUFDO0NBQUEsQUFiRCxJQWFDO1NBUFksY0FBYzs7Ozs7O0lBQ2IseUNBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1vZExhenlBQ29tcG9uZW50IH0gZnJvbSAnLi9tb2QtbGF6eS1hLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNb2RMYXp5QVNlcnZpY2UgfSBmcm9tICcuL21vZC1sYXp5LWEuc2VydmljZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW01vZExhenlBQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW1xuICBdLFxuICBleHBvcnRzOiBbTW9kTGF6eUFDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIE1vZExhenlBTW9kdWxlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtb2RMYXp5QVNlcnZpY2U6IE1vZExhenlBU2VydmljZSkge1xuICAgIGNvbnNvbGUubG9nKCdNb2RMYXp5QSBNb2R1bGUgY29uc3RydWN0b3InKTtcblxuICAgIGNvbnNvbGUubG9nKCdQdXNoaW5nIGRhdGEgZnJvbSBNb2RMYXp5QSBNb2R1bGUgY29uc3RydWN0b3InKTtcbiAgICB0aGlzLm1vZExhenlBU2VydmljZS5wdXNoRGF0YSgnc29tZSBEYXRhIGZyb20gTW9kTGF6eUEgTW9kdWxlIGNvbnN0cnVjdG9yJyk7XG4gIH1cbn1cbiJdfQ==