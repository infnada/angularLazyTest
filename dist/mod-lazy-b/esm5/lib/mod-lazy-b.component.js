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
        console.log('data', this.modLazyAService.getData());
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kLWxhenktYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tb2QtbGF6eS1iLyIsInNvdXJjZXMiOlsibGliL21vZC1sYXp5LWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxZQUFZLENBQUM7QUFFM0M7SUFXRSwyQkFBb0IsZUFBZ0M7UUFBaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2xELE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztJQUNoRCxDQUFDOzs7O0lBRUQsb0NBQVE7OztJQUFSO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrREFBa0QsQ0FBQyxDQUFDO1FBQ2hFLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUN0RCxDQUFDOztnQkFsQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxjQUFjO29CQUN4QixRQUFRLEVBQUUsa0RBSVQ7aUJBRUY7Ozs7Z0JBVk8sZUFBZTs7SUFzQnZCLHdCQUFDO0NBQUEsQUFwQkQsSUFvQkM7U0FYWSxpQkFBaUI7Ozs7OztJQUVoQiw0Q0FBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNb2RMYXp5QVNlcnZpY2V9IGZyb20gXCJtb2QtbGF6eS1hXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1Nb2RMYXp5QicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHA+XG4gICAgICBtb2QtbGF6eS1iIHdvcmtzIVxuICAgIDwvcD5cbiAgYCxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBNb2RMYXp5QkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtb2RMYXp5QVNlcnZpY2U6IE1vZExhenlBU2VydmljZSkge1xuICAgIGNvbnNvbGUubG9nKCdNb2RMYXp5QiBDb21wb25lbnQgY29uc3RydWN0b3InKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGNvbnNvbGUubG9nKCdHZXR0aW5nIGRhdGEgZnJvbSBNb2RMYXp5QiBDb21wb25lbnQgY29uc3RydWN0b3InKTtcbiAgICBjb25zb2xlLmxvZygnZGF0YScsIHRoaXMubW9kTGF6eUFTZXJ2aWNlLmdldERhdGEoKSk7XG4gIH1cblxufVxuIl19