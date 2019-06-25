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
        console.log('data', this.modLazyAService.getData());
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kLWxhenktYS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tb2QtbGF6eS1hLyIsInNvdXJjZXMiOlsibGliL21vZC1sYXp5LWEubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzNELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUV2RDtJQU9FLHdCQUFvQixlQUFnQztRQUFoQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDbEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO1FBRTNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsK0NBQStDLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDO1FBQzVFLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUN0RCxDQUFDOztnQkFiRixRQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsaUJBQWlCLENBQUM7b0JBQ2pDLE9BQU8sRUFBRSxFQUNSO29CQUNELE9BQU8sRUFBRSxDQUFDLGlCQUFpQixDQUFDO2lCQUM3Qjs7OztnQkFQUSxlQUFlOztJQWdCeEIscUJBQUM7Q0FBQSxBQWRELElBY0M7U0FSWSxjQUFjOzs7Ozs7SUFDYix5Q0FBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTW9kTGF6eUFDb21wb25lbnQgfSBmcm9tICcuL21vZC1sYXp5LWEuY29tcG9uZW50JztcbmltcG9ydCB7IE1vZExhenlBU2VydmljZSB9IGZyb20gJy4vbW9kLWxhenktYS5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbTW9kTGF6eUFDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbXG4gIF0sXG4gIGV4cG9ydHM6IFtNb2RMYXp5QUNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgTW9kTGF6eUFNb2R1bGUge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1vZExhenlBU2VydmljZTogTW9kTGF6eUFTZXJ2aWNlKSB7XG4gICAgY29uc29sZS5sb2coJ01vZExhenlBIE1vZHVsZSBjb25zdHJ1Y3RvcicpO1xuXG4gICAgY29uc29sZS5sb2coJ1B1c2hpbmcgZGF0YSBmcm9tIE1vZExhenlBIE1vZHVsZSBjb25zdHJ1Y3RvcicpO1xuICAgIHRoaXMubW9kTGF6eUFTZXJ2aWNlLnB1c2hEYXRhKCdzb21lIERhdGEgZnJvbSBNb2RMYXp5QSBNb2R1bGUgY29uc3RydWN0b3InKTtcbiAgICBjb25zb2xlLmxvZygnZGF0YScsIHRoaXMubW9kTGF6eUFTZXJ2aWNlLmdldERhdGEoKSk7XG4gIH1cbn1cbiJdfQ==