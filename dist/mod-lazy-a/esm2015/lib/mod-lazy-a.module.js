/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { ModLazyAComponent } from './mod-lazy-a.component';
import { ModLazyAService } from './mod-lazy-a.service';
export class ModLazyAModule {
    /**
     * @param {?} modLazyAService
     */
    constructor(modLazyAService) {
        this.modLazyAService = modLazyAService;
        console.log('ModLazyA Module constructor');
        console.log('Pushing data from ModLazyA Module constructor');
        this.modLazyAService.pushData('some Data from ModLazyA Module constructor');
        console.log('data', this.modLazyAService.getData());
    }
}
ModLazyAModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ModLazyAComponent],
                imports: [],
                exports: [ModLazyAComponent]
            },] }
];
/** @nocollapse */
ModLazyAModule.ctorParameters = () => [
    { type: ModLazyAService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    ModLazyAModule.prototype.modLazyAService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kLWxhenktYS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tb2QtbGF6eS1hLyIsInNvdXJjZXMiOlsibGliL21vZC1sYXp5LWEubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzNELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQVF2RCxNQUFNLE9BQU8sY0FBYzs7OztJQUN6QixZQUFvQixlQUFnQztRQUFoQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDbEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO1FBRTNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsK0NBQStDLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDO1FBQzVFLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUN0RCxDQUFDOzs7WUFiRixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsaUJBQWlCLENBQUM7Z0JBQ2pDLE9BQU8sRUFBRSxFQUNSO2dCQUNELE9BQU8sRUFBRSxDQUFDLGlCQUFpQixDQUFDO2FBQzdCOzs7O1lBUFEsZUFBZTs7Ozs7OztJQVNWLHlDQUF3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNb2RMYXp5QUNvbXBvbmVudCB9IGZyb20gJy4vbW9kLWxhenktYS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTW9kTGF6eUFTZXJ2aWNlIH0gZnJvbSAnLi9tb2QtbGF6eS1hLnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtNb2RMYXp5QUNvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtcbiAgXSxcbiAgZXhwb3J0czogW01vZExhenlBQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBNb2RMYXp5QU1vZHVsZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbW9kTGF6eUFTZXJ2aWNlOiBNb2RMYXp5QVNlcnZpY2UpIHtcbiAgICBjb25zb2xlLmxvZygnTW9kTGF6eUEgTW9kdWxlIGNvbnN0cnVjdG9yJyk7XG5cbiAgICBjb25zb2xlLmxvZygnUHVzaGluZyBkYXRhIGZyb20gTW9kTGF6eUEgTW9kdWxlIGNvbnN0cnVjdG9yJyk7XG4gICAgdGhpcy5tb2RMYXp5QVNlcnZpY2UucHVzaERhdGEoJ3NvbWUgRGF0YSBmcm9tIE1vZExhenlBIE1vZHVsZSBjb25zdHJ1Y3RvcicpO1xuICAgIGNvbnNvbGUubG9nKCdkYXRhJywgdGhpcy5tb2RMYXp5QVNlcnZpY2UuZ2V0RGF0YSgpKTtcbiAgfVxufVxuIl19