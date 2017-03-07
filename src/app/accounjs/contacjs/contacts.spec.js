"use strict";var testing_1=require("@angular/core/testing"),platform_browser_1=require("@angular/platform-browser"),ng2_charts_1=require("ng2-charts/ng2-charts"),dropdown_1=require("ng2-bootstrap/dropdown"),common_1=require("@angular/common"),ng2Bootstrap=require("ng2-bootstrap"),modal_1=require("ng2-bootstrap/modal"),forms_1=require("@angular/forms"),http_1=require("@angular/http"),testing_2=require("@angular/http/testing"),http_service_1=require("./../../shared/http-service/http.service"),contacts_component_1=require("./contacts.component"),contacts_list_table_component_1=require("./contacts-list-table.component"),contact_form_component_1=require("./contact-form.component");describe("ContactsComponent (inline template)",function(){var t,e,o,r,n,i,s,c,a={id:2,name:"Juan",last_name:"Hernández",client:2,charge:"Estudent",landline:"2211111",extension:"22",mobile_phone_1:"4422222222",mobile_phone_2:"4112223322",email:"juan@gmail.com",alternate_email:"juan@gmail.com",is_active:!0};beforeEach(testing_1.async(function(){testing_1.TestBed.configureTestingModule({declarations:[contacts_component_1.ContactsComponent,contacts_list_table_component_1.ContactsListTableComponent,contact_form_component_1.ContactFormComponent],imports:[ng2Bootstrap.Ng2BootstrapModule,common_1.CommonModule,forms_1.ReactiveFormsModule,forms_1.FormsModule,ng2_charts_1.ChartsModule,dropdown_1.DropdownModule,modal_1.ModalModule.forRoot()],providers:[{provide:http_service_1.HttpService,useFactory:function(t,e){return new http_service_1.HttpService(t,e)},deps:[testing_2.MockBackend,http_1.BaseRequestOptions]},testing_2.MockBackend,http_1.BaseRequestOptions]}),t=testing_1.TestBed.createComponent(contacts_component_1.ContactsComponent),e=testing_1.TestBed.createComponent(contact_form_component_1.ContactFormComponent),o=testing_1.TestBed.createComponent(contacts_list_table_component_1.ContactsListTableComponent),r=t.componentInstance,n=e.componentInstance,i=o.componentInstance,s=t.debugElement.query(platform_browser_1.By.css("h1")),c=s.nativeElement})),it("should have a defined component",function(){r.ngOnInit(),expect(r).toBeDefined()}),it("no title in the DOM until manually call `detectChanges`",function(){expect(c.textContent).toEqual("")}),it("should display original page title",function(){t.detectChanges(),expect(c.textContent).toContain(r.title),expect(c.textContent).not.toBe(null)}),it("should load the contacts list",function(){r.loadClientsList("clients/contacts/"),expect(r.contactsList).not.toBeNull()}),it("should load the clients list",function(){r.loadContactsList("clients/clients/"),expect(r.clientsList).not.toBeNull()}),it("should initialize the modal",function(){r.initializeModal(),expect(r.contact).toBeNull()}),it("should return a not empty Contact object",function(){r.getContactFromTable(a),expect(r.contact).not.toBeNull()})});