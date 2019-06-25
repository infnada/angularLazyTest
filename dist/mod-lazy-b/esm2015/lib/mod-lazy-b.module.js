/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { ModLazyAService } from 'mod-lazy-a';
import { ModLazyBComponent } from './mod-lazy-b.component';
export class ModLazyBModule {
    /**
     * @param {?} modLazyAService
     */
    constructor(modLazyAService) {
        this.modLazyAService = modLazyAService;
        console.log('ModLazyB Module constructor');
        console.log('Getting data from ModLazyB Module constructor');
        console.log('data', this.modLazyAService.getData());
    }
}
ModLazyBModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ModLazyBComponent],
                imports: [],
                exports: [ModLazyBComponent]
            },] }
];
/** @nocollapse */
ModLazyBModule.ctorParameters = () => [
    { type: ModLazyAService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    ModLazyBModule.prototype.modLazyAService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kLWxhenktYi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tb2QtbGF6eS1iLyIsInNvdXJjZXMiOlsibGliL21vZC1sYXp5LWIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFFN0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFRM0QsTUFBTSxPQUFPLGNBQWM7Ozs7SUFDekIsWUFBb0IsZUFBZ0M7UUFBaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2xELE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLENBQUMsQ0FBQztRQUUzQyxPQUFPLENBQUMsR0FBRyxDQUFDLCtDQUErQyxDQUFDLENBQUM7UUFDN0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQ3RELENBQUM7OztZQVpGLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztnQkFDakMsT0FBTyxFQUFFLEVBQ1I7Z0JBQ0QsT0FBTyxFQUFFLENBQUMsaUJBQWlCLENBQUM7YUFDN0I7Ozs7WUFUUSxlQUFlOzs7Ozs7O0lBV1YseUNBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTW9kTGF6eUFTZXJ2aWNlIH0gZnJvbSAnbW9kLWxhenktYSc7XG5cbmltcG9ydCB7IE1vZExhenlCQ29tcG9uZW50IH0gZnJvbSAnLi9tb2QtbGF6eS1iLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW01vZExhenlCQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW1xuICBdLFxuICBleHBvcnRzOiBbTW9kTGF6eUJDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIE1vZExhenlCTW9kdWxlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtb2RMYXp5QVNlcnZpY2U6IE1vZExhenlBU2VydmljZSkge1xuICAgIGNvbnNvbGUubG9nKCdNb2RMYXp5QiBNb2R1bGUgY29uc3RydWN0b3InKTtcblxuICAgIGNvbnNvbGUubG9nKCdHZXR0aW5nIGRhdGEgZnJvbSBNb2RMYXp5QiBNb2R1bGUgY29uc3RydWN0b3InKTtcbiAgICBjb25zb2xlLmxvZygnZGF0YScsIHRoaXMubW9kTGF6eUFTZXJ2aWNlLmdldERhdGEoKSk7XG4gIH1cbn1cbiJdfQ==