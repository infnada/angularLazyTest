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
        console.log('data', this.modLazyAService.getData());
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kLWxhenktYS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tb2QtbGF6eS1hLyIsInNvdXJjZXMiOlsibGliL21vZC1sYXp5LWEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQVdyRCxNQUFNLE9BQU8saUJBQWlCOzs7O0lBRTVCLFlBQW9CLGVBQWdDO1FBQWhDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNsRCxPQUFPLENBQUMsR0FBRyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7SUFDaEQsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLCtDQUErQyxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsNENBQTRDLENBQUMsQ0FBQztRQUM1RSxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDdEQsQ0FBQzs7O1lBbkJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsUUFBUSxFQUFFOzs7O0dBSVQ7YUFFRjs7OztZQVZPLGVBQWU7Ozs7Ozs7SUFhVCw0Q0FBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNb2RMYXp5QVNlcnZpY2V9IGZyb20gXCIuL21vZC1sYXp5LWEuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItTW9kTGF6eUEnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxwPlxuICAgICAgbW9kLWxhenktYSB3b3JrcyFcbiAgICA8L3A+XG4gIGAsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgTW9kTGF6eUFDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbW9kTGF6eUFTZXJ2aWNlOiBNb2RMYXp5QVNlcnZpY2UpIHtcbiAgICBjb25zb2xlLmxvZygnTW9kTGF6eUEgQ29tcG9uZW50IGNvbnN0cnVjdG9yJyk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zb2xlLmxvZygnUHVzaGluZyBkYXRhIGZyb20gTW9kTGF6eUEgQ29tcG9uZW50IG5nT25Jbml0Jyk7XG4gICAgdGhpcy5tb2RMYXp5QVNlcnZpY2UucHVzaERhdGEoJ3NvbWUgRGF0YSBmcm9tIE1vZExhenlBIENvbXBvbmVudCBuZ09uSW5pdCcpO1xuICAgIGNvbnNvbGUubG9nKCdkYXRhJywgdGhpcy5tb2RMYXp5QVNlcnZpY2UuZ2V0RGF0YSgpKTtcbiAgfVxuXG59XG4iXX0=