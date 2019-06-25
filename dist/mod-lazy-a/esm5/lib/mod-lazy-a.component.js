/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { ModLazyAService } from "./mod-lazy-a.service";
var ModLazyAComponent = /** @class */ (function () {
    function ModLazyAComponent(modLazyAService) {
        this.modLazyAService = modLazyAService;
        console.log('ModLazyA Component constructor');
    }
    /**
     * @return {?}
     */
    ModLazyAComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        console.log('Pushing data from ModLazyA Component ngOnInit');
        this.modLazyAService.pushData('some Data from ModLazyA Component ngOnInit');
        console.log('data', this.modLazyAService.getData());
    };
    ModLazyAComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-ModLazyA',
                    template: "\n    <p>\n      mod-lazy-a works!\n    </p>\n  "
                }] }
    ];
    /** @nocollapse */
    ModLazyAComponent.ctorParameters = function () { return [
        { type: ModLazyAService }
    ]; };
    return ModLazyAComponent;
}());
export { ModLazyAComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ModLazyAComponent.prototype.modLazyAService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kLWxhenktYS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tb2QtbGF6eS1hLyIsInNvdXJjZXMiOlsibGliL21vZC1sYXp5LWEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUVyRDtJQVdFLDJCQUFvQixlQUFnQztRQUFoQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDbEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO0lBQ2hELENBQUM7Ozs7SUFFRCxvQ0FBUTs7O0lBQVI7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLCtDQUErQyxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsNENBQTRDLENBQUMsQ0FBQztRQUM1RSxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDdEQsQ0FBQzs7Z0JBbkJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsUUFBUSxFQUFFLGtEQUlUO2lCQUVGOzs7O2dCQVZPLGVBQWU7O0lBdUJ2Qix3QkFBQztDQUFBLEFBckJELElBcUJDO1NBWlksaUJBQWlCOzs7Ozs7SUFFaEIsNENBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TW9kTGF6eUFTZXJ2aWNlfSBmcm9tIFwiLi9tb2QtbGF6eS1hLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLU1vZExhenlBJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8cD5cbiAgICAgIG1vZC1sYXp5LWEgd29ya3MhXG4gICAgPC9wPlxuICBgLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIE1vZExhenlBQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1vZExhenlBU2VydmljZTogTW9kTGF6eUFTZXJ2aWNlKSB7XG4gICAgY29uc29sZS5sb2coJ01vZExhenlBIENvbXBvbmVudCBjb25zdHJ1Y3RvcicpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgY29uc29sZS5sb2coJ1B1c2hpbmcgZGF0YSBmcm9tIE1vZExhenlBIENvbXBvbmVudCBuZ09uSW5pdCcpO1xuICAgIHRoaXMubW9kTGF6eUFTZXJ2aWNlLnB1c2hEYXRhKCdzb21lIERhdGEgZnJvbSBNb2RMYXp5QSBDb21wb25lbnQgbmdPbkluaXQnKTtcbiAgICBjb25zb2xlLmxvZygnZGF0YScsIHRoaXMubW9kTGF6eUFTZXJ2aWNlLmdldERhdGEoKSk7XG4gIH1cblxufVxuIl19