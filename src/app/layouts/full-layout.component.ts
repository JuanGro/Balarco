import { Component, OnInit }            from '@angular/core';

@Component({
    selector: 'app-dashboard',
    templateUrl: './full-layout.component.html'
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

    constructor() {
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

    private logout() {
      console.log('In logout!');
    }
}
