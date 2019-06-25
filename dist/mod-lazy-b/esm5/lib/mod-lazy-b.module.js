/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { ModLazyAService } from 'mod-lazy-a';
import { ModLazyBComponent } from './mod-lazy-b.component';
var ModLazyBModule = /** @class */ (function () {
    function ModLazyBModule(modLazyAService) {
        this.modLazyAService = modLazyAService;
        console.log('ModLazyB Module constructor');
        console.log('Getting data from ModLazyB Module constructor');
        console.log('data', this.modLazyAService.getData());
    }
    ModLazyBModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [ModLazyBComponent],
                    imports: [],
                    exports: [ModLazyBComponent],
                    providers: [
                        ModLazyAService
                    ]
                },] }
    ];
    /** @nocollapse */
    ModLazyBModule.ctorParameters = function () { return [
        { type: ModLazyAService }
    ]; };
    return ModLazyBModule;
}());
export { ModLazyBModule };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ModLazyBModule.prototype.modLazyAService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kLWxhenktYi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tb2QtbGF6eS1iLyIsInNvdXJjZXMiOlsibGliL21vZC1sYXp5LWIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXZDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxZQUFZLENBQUM7QUFFM0MsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFFekQ7SUFTRSx3QkFBb0IsZUFBZ0M7UUFBaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2xELE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLENBQUMsQ0FBQztRQUUzQyxPQUFPLENBQUMsR0FBRyxDQUFDLCtDQUErQyxDQUFDLENBQUM7UUFDN0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQ3RELENBQUM7O2dCQWRGLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztvQkFDakMsT0FBTyxFQUFFLEVBQUU7b0JBQ1gsT0FBTyxFQUFFLENBQUMsaUJBQWlCLENBQUM7b0JBQzVCLFNBQVMsRUFBRTt3QkFDVCxlQUFlO3FCQUNoQjtpQkFDRjs7OztnQkFYTyxlQUFlOztJQW1CdkIscUJBQUM7Q0FBQSxBQWZELElBZUM7U0FQWSxjQUFjOzs7Ozs7SUFDYix5Q0FBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtNb2RMYXp5QVNlcnZpY2V9IGZyb20gJ21vZC1sYXp5LWEnO1xuXG5pbXBvcnQge01vZExhenlCQ29tcG9uZW50fSBmcm9tICcuL21vZC1sYXp5LWIuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbTW9kTGF6eUJDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbXSxcbiAgZXhwb3J0czogW01vZExhenlCQ29tcG9uZW50XSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgTW9kTGF6eUFTZXJ2aWNlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTW9kTGF6eUJNb2R1bGUge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1vZExhenlBU2VydmljZTogTW9kTGF6eUFTZXJ2aWNlKSB7XG4gICAgY29uc29sZS5sb2coJ01vZExhenlCIE1vZHVsZSBjb25zdHJ1Y3RvcicpO1xuXG4gICAgY29uc29sZS5sb2coJ0dldHRpbmcgZGF0YSBmcm9tIE1vZExhenlCIE1vZHVsZSBjb25zdHJ1Y3RvcicpO1xuICAgIGNvbnNvbGUubG9nKCdkYXRhJywgdGhpcy5tb2RMYXp5QVNlcnZpY2UuZ2V0RGF0YSgpKTtcbiAgfVxufVxuIl19