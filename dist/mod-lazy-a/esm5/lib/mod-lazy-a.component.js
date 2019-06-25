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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kLWxhenktYS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tb2QtbGF6eS1hLyIsInNvdXJjZXMiOlsibGliL21vZC1sYXp5LWEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUVyRDtJQVdFLDJCQUFvQixlQUFnQztRQUFoQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDbEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO0lBQ2hELENBQUM7Ozs7SUFFRCxvQ0FBUTs7O0lBQVI7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLCtDQUErQyxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsNENBQTRDLENBQUMsQ0FBQztJQUM5RSxDQUFDOztnQkFsQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxjQUFjO29CQUN4QixRQUFRLEVBQUUsa0RBSVQ7aUJBRUY7Ozs7Z0JBVk8sZUFBZTs7SUFzQnZCLHdCQUFDO0NBQUEsQUFwQkQsSUFvQkM7U0FYWSxpQkFBaUI7Ozs7OztJQUVoQiw0Q0FBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNb2RMYXp5QVNlcnZpY2V9IGZyb20gXCIuL21vZC1sYXp5LWEuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItTW9kTGF6eUEnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxwPlxuICAgICAgbW9kLWxhenktYSB3b3JrcyFcbiAgICA8L3A+XG4gIGAsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgTW9kTGF6eUFDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbW9kTGF6eUFTZXJ2aWNlOiBNb2RMYXp5QVNlcnZpY2UpIHtcbiAgICBjb25zb2xlLmxvZygnTW9kTGF6eUEgQ29tcG9uZW50IGNvbnN0cnVjdG9yJyk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zb2xlLmxvZygnUHVzaGluZyBkYXRhIGZyb20gTW9kTGF6eUEgQ29tcG9uZW50IG5nT25Jbml0Jyk7XG4gICAgdGhpcy5tb2RMYXp5QVNlcnZpY2UucHVzaERhdGEoJ3NvbWUgRGF0YSBmcm9tIE1vZExhenlBIENvbXBvbmVudCBuZ09uSW5pdCcpO1xuICB9XG5cbn1cbiJdfQ==