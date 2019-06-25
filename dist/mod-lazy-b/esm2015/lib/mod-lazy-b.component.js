/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { ModLazyAService } from "mod-lazy-a";
export class ModLazyBComponent {
    /**
     * @param {?} modLazyAService
     */
    constructor(modLazyAService) {
        this.modLazyAService = modLazyAService;
        console.log('ModLazyB Component constructor');
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        console.log('Getting data from ModLazyB Component constructor');
        this.modLazyAService.getData();
    }
}
ModLazyBComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-ModLazyB',
                template: `
    <p>
      mod-lazy-b works!
    </p>
  `
            }] }
];
/** @nocollapse */
ModLazyBComponent.ctorParameters = () => [
    { type: ModLazyAService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    ModLazyBComponent.prototype.modLazyAService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kLWxhenktYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tb2QtbGF6eS1iLyIsInNvdXJjZXMiOlsibGliL21vZC1sYXp5LWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxZQUFZLENBQUM7QUFXM0MsTUFBTSxPQUFPLGlCQUFpQjs7OztJQUU1QixZQUFvQixlQUFnQztRQUFoQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDbEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO0lBQ2hELENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxrREFBa0QsQ0FBQyxDQUFDO1FBQ2hFLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDakMsQ0FBQzs7O1lBbEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsUUFBUSxFQUFFOzs7O0dBSVQ7YUFFRjs7OztZQVZPLGVBQWU7Ozs7Ozs7SUFhVCw0Q0FBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNb2RMYXp5QVNlcnZpY2V9IGZyb20gXCJtb2QtbGF6eS1hXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1Nb2RMYXp5QicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHA+XG4gICAgICBtb2QtbGF6eS1iIHdvcmtzIVxuICAgIDwvcD5cbiAgYCxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBNb2RMYXp5QkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtb2RMYXp5QVNlcnZpY2U6IE1vZExhenlBU2VydmljZSkge1xuICAgIGNvbnNvbGUubG9nKCdNb2RMYXp5QiBDb21wb25lbnQgY29uc3RydWN0b3InKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGNvbnNvbGUubG9nKCdHZXR0aW5nIGRhdGEgZnJvbSBNb2RMYXp5QiBDb21wb25lbnQgY29uc3RydWN0b3InKTtcbiAgICB0aGlzLm1vZExhenlBU2VydmljZS5nZXREYXRhKCk7XG4gIH1cblxufVxuIl19