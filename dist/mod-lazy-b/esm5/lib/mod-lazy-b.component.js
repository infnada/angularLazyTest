/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { ModLazyAService } from "mod-lazy-a";
var ModLazyBComponent = /** @class */ (function () {
    function ModLazyBComponent(modLazyAService) {
        this.modLazyAService = modLazyAService;
        console.log('ModLazyB Component constructor');
    }
    /**
     * @return {?}
     */
    ModLazyBComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        console.log('Getting data from ModLazyB Component constructor');
        this.modLazyAService.getData();
    };
    ModLazyBComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-ModLazyB',
                    template: "\n    <p>\n      mod-lazy-b works!\n    </p>\n  "
                }] }
    ];
    /** @nocollapse */
    ModLazyBComponent.ctorParameters = function () { return [
        { type: ModLazyAService }
    ]; };
    return ModLazyBComponent;
}());
export { ModLazyBComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ModLazyBComponent.prototype.modLazyAService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kLWxhenktYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tb2QtbGF6eS1iLyIsInNvdXJjZXMiOlsibGliL21vZC1sYXp5LWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxZQUFZLENBQUM7QUFFM0M7SUFXRSwyQkFBb0IsZUFBZ0M7UUFBaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2xELE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztJQUNoRCxDQUFDOzs7O0lBRUQsb0NBQVE7OztJQUFSO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrREFBa0QsQ0FBQyxDQUFDO1FBQ2hFLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDakMsQ0FBQzs7Z0JBbEJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsUUFBUSxFQUFFLGtEQUlUO2lCQUVGOzs7O2dCQVZPLGVBQWU7O0lBc0J2Qix3QkFBQztDQUFBLEFBcEJELElBb0JDO1NBWFksaUJBQWlCOzs7Ozs7SUFFaEIsNENBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TW9kTGF6eUFTZXJ2aWNlfSBmcm9tIFwibW9kLWxhenktYVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItTW9kTGF6eUInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxwPlxuICAgICAgbW9kLWxhenktYiB3b3JrcyFcbiAgICA8L3A+XG4gIGAsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgTW9kTGF6eUJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbW9kTGF6eUFTZXJ2aWNlOiBNb2RMYXp5QVNlcnZpY2UpIHtcbiAgICBjb25zb2xlLmxvZygnTW9kTGF6eUIgQ29tcG9uZW50IGNvbnN0cnVjdG9yJyk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zb2xlLmxvZygnR2V0dGluZyBkYXRhIGZyb20gTW9kTGF6eUIgQ29tcG9uZW50IGNvbnN0cnVjdG9yJyk7XG4gICAgdGhpcy5tb2RMYXp5QVNlcnZpY2UuZ2V0RGF0YSgpO1xuICB9XG5cbn1cbiJdfQ==