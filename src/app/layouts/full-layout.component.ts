import { Component, OnInit } from '@angular/core';
// Services
import { HttpService } from '../shared/http-service/http.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './full-layout.component.html',
    providers: [ HttpService ]
})

export class FullLayoutComponent implements OnInit {

    public charge: string = 'Cuentas';

    // We are going to make some permissions for the example
    // public permission: number = 1;

    private designDirector: boolean = true;
    private designer: boolean = true;
    private accounts: boolean = true;
    private admin: boolean = true;

    public disabled: boolean = false;
    public status: {isopen: boolean} = {isopen: false};

    constructor(private httpService: HttpService) {
        this.designDirector = true;
        this.designer = true;
        this.accounts = true;
        this.admin = true;
    }

    public toggled(open: boolean): void {
        console.log('Dropdown is now: ', open);
    }

    public toggleDropdown($event: MouseEvent): void {
        $event.preventDefault();
        $event.stopPropagation();
        this.status.isopen = !this.status.isopen;
    }

    ngOnInit(): void {}

    /**
    * Calls HttpService logout to delete token and returns user to url Login.
    **/
    public logout() {
      this.httpService.logout();
    }
}
