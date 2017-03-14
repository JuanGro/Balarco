var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { DropdownModule } from 'ng2-bootstrap/dropdown';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ng2-bootstrap/modal';
import { AccountsRoutingModule } from './accounts-routing.module';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactsListComponent } from './contacts/contacts-list.component';
import { ContactFormComponent } from './contacts/contact-form.component';
import { ClientsComponent } from './clients/clients.component';
import { ClientsListComponent } from './clients/clients-list.component';
import { ClientFormComponent } from './clients/client-form.component';
import { IgualasListComponent } from './igualas/igualas-list.component';
import { IgualasComponent } from './igualas/igualas.component';
import { IgualaFormComponent } from './igualas/iguala-form.component';
import { DesignsListComponent } from './designs-list/designs-list.component';
import { DatepickerModule } from 'ng2-bootstrap/datepicker';
import { SelectModule } from 'ng2-select';
import { HttpService } from '../shared/http-service/http.service';
import { CanActivateAuthGuard } from '../shared/auth/auth.service';
var AccountsModule = (function () {
    function AccountsModule() {
    }
    return AccountsModule;
}());
AccountsModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            AccountsRoutingModule,
            ChartsModule,
            DropdownModule,
            ModalModule.forRoot(),
            DatepickerModule.forRoot(),
            SelectModule
        ],
        declarations: [ContactsComponent, IgualasListComponent, IgualasComponent, IgualaFormComponent, DesignsListComponent, ContactsListComponent,
            ContactFormComponent, ClientsComponent, ClientsListComponent, ClientFormComponent],
        providers: [CanActivateAuthGuard, HttpService]
    })
], AccountsModule);
export { AccountsModule };
//# sourceMappingURL=../../../../src/app/accounts/accounts.module.js.map