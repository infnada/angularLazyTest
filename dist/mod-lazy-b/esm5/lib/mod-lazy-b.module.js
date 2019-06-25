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
        this.modLazyAService.getData();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kLWxhenktYi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tb2QtbGF6eS1iLyIsInNvdXJjZXMiOlsibGliL21vZC1sYXp5LWIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFFN0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFM0Q7SUFPRSx3QkFBb0IsZUFBZ0M7UUFBaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2xELE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLENBQUMsQ0FBQztRQUUzQyxPQUFPLENBQUMsR0FBRyxDQUFDLCtDQUErQyxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNqQyxDQUFDOztnQkFaRixRQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsaUJBQWlCLENBQUM7b0JBQ2pDLE9BQU8sRUFBRSxFQUNSO29CQUNELE9BQU8sRUFBRSxDQUFDLGlCQUFpQixDQUFDO2lCQUM3Qjs7OztnQkFUUSxlQUFlOztJQWlCeEIscUJBQUM7Q0FBQSxBQWJELElBYUM7U0FQWSxjQUFjOzs7Ozs7SUFDYix5Q0FBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBNb2RMYXp5QVNlcnZpY2UgfSBmcm9tICdtb2QtbGF6eS1hJztcblxuaW1wb3J0IHsgTW9kTGF6eUJDb21wb25lbnQgfSBmcm9tICcuL21vZC1sYXp5LWIuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbTW9kTGF6eUJDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbXG4gIF0sXG4gIGV4cG9ydHM6IFtNb2RMYXp5QkNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgTW9kTGF6eUJNb2R1bGUge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1vZExhenlBU2VydmljZTogTW9kTGF6eUFTZXJ2aWNlKSB7XG4gICAgY29uc29sZS5sb2coJ01vZExhenlCIE1vZHVsZSBjb25zdHJ1Y3RvcicpO1xuXG4gICAgY29uc29sZS5sb2coJ0dldHRpbmcgZGF0YSBmcm9tIE1vZExhenlCIE1vZHVsZSBjb25zdHJ1Y3RvcicpO1xuICAgIHRoaXMubW9kTGF6eUFTZXJ2aWNlLmdldERhdGEoKTtcbiAgfVxufVxuIl19