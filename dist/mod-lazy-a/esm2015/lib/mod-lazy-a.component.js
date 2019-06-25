/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { ModLazyAService } from "./mod-lazy-a.service";
export class ModLazyAComponent {
    /**
     * @param {?} modLazyAService
     */
    constructor(modLazyAService) {
        this.modLazyAService = modLazyAService;
        console.log('ModLazyA Component constructor');
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        console.log('Pushing data from ModLazyA Component ngOnInit');
        this.modLazyAService.pushData('some Data from ModLazyA Component ngOnInit');
    }
}
ModLazyAComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-ModLazyA',
                template: `
    <p>
      mod-lazy-a works!
    </p>
  `
            }] }
];
/** @nocollapse */
ModLazyAComponent.ctorParameters = () => [
    { type: ModLazyAService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    ModLazyAComponent.prototype.modLazyAService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kLWxhenktYS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tb2QtbGF6eS1hLyIsInNvdXJjZXMiOlsibGliL21vZC1sYXp5LWEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQVdyRCxNQUFNLE9BQU8saUJBQWlCOzs7O0lBRTVCLFlBQW9CLGVBQWdDO1FBQWhDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNsRCxPQUFPLENBQUMsR0FBRyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7SUFDaEQsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLCtDQUErQyxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsNENBQTRDLENBQUMsQ0FBQztJQUM5RSxDQUFDOzs7WUFsQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2dCQUN4QixRQUFRLEVBQUU7Ozs7R0FJVDthQUVGOzs7O1lBVk8sZUFBZTs7Ozs7OztJQWFULDRDQUF3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01vZExhenlBU2VydmljZX0gZnJvbSBcIi4vbW9kLWxhenktYS5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1Nb2RMYXp5QScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHA+XG4gICAgICBtb2QtbGF6eS1hIHdvcmtzIVxuICAgIDwvcD5cbiAgYCxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBNb2RMYXp5QUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtb2RMYXp5QVNlcnZpY2U6IE1vZExhenlBU2VydmljZSkge1xuICAgIGNvbnNvbGUubG9nKCdNb2RMYXp5QSBDb21wb25lbnQgY29uc3RydWN0b3InKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGNvbnNvbGUubG9nKCdQdXNoaW5nIGRhdGEgZnJvbSBNb2RMYXp5QSBDb21wb25lbnQgbmdPbkluaXQnKTtcbiAgICB0aGlzLm1vZExhenlBU2VydmljZS5wdXNoRGF0YSgnc29tZSBEYXRhIGZyb20gTW9kTGF6eUEgQ29tcG9uZW50IG5nT25Jbml0Jyk7XG4gIH1cblxufVxuIl19