/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class ModLazyAService {
    constructor() {
        this.data = [];
        console.log('ModLazyA Service constructor');
    }
    /**
     * @param {?} data
     * @return {?}
     */
    pushData(data) {
        this.data.push(data);
    }
    /**
     * @return {?}
     */
    getData() {
        return this.data;
    }
}
ModLazyAService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ModLazyAService.ctorParameters = () => [];
/** @nocollapse */ ModLazyAService.ngInjectableDef = i0.defineInjectable({ factory: function ModLazyAService_Factory() { return new ModLazyAService(); }, token: ModLazyAService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    ModLazyAService.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kLWxhenktYS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbW9kLWxhenktYS8iLCJzb3VyY2VzIjpbImxpYi9tb2QtbGF6eS1hLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBSzNDLE1BQU0sT0FBTyxlQUFlO0lBSTFCO1FBRlEsU0FBSSxHQUFHLEVBQUUsQ0FBQztRQUdoQixPQUFPLENBQUMsR0FBRyxDQUFDLDhCQUE4QixDQUFDLENBQUM7SUFDOUMsQ0FBQzs7Ozs7SUFFRCxRQUFRLENBQUMsSUFBSTtRQUNYLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFFRCxPQUFPO1FBQ0wsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ25CLENBQUM7OztZQWpCRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7Ozs7Ozs7SUFHQywrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE1vZExhenlBU2VydmljZSB7XG5cbiAgcHJpdmF0ZSBkYXRhID0gW107XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc29sZS5sb2coJ01vZExhenlBIFNlcnZpY2UgY29uc3RydWN0b3InKTtcbiAgfVxuXG4gIHB1c2hEYXRhKGRhdGEpIHtcbiAgICB0aGlzLmRhdGEucHVzaChkYXRhKTtcbiAgfVxuXG4gIGdldERhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YTtcbiAgfVxufVxuIl19