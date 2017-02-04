import { NgModule } from '@angular/core';
import { DropdownMenuDirective } from './dropdown-menu.directive';
import { DropdownToggleDirective } from './dropdown-toggle.directive';
import { DropdownDirective } from './dropdown.directive';
import { DropdownConfig } from './dropdown.config';
export var DropdownModule = (function () {
    function DropdownModule() {
    }
    DropdownModule.forRoot = function () {
        return { ngModule: DropdownModule, providers: [DropdownConfig] };
    };
    DropdownModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [DropdownDirective, DropdownMenuDirective, DropdownToggleDirective],
                    exports: [DropdownDirective, DropdownMenuDirective, DropdownToggleDirective]
                },] },
    ];
    /** @nocollapse */
    DropdownModule.ctorParameters = function () { return []; };
    return DropdownModule;
}());
//# sourceMappingURL=dropdown.module.js.map