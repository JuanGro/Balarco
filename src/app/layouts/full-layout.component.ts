import { Component, OnInit } from '@angular/core';
// Services
import { HttpService } from '../shared/http-service/http.service';
// Enum
import { Role } from '../shared/auth/role';
// Models
import { CurrentUser } from '../shared/current-user/current-user-model';

@Component({
    selector: 'app-dashboard',
    templateUrl: './full-layout.component.html',
    providers: [ HttpService ]
})

export class FullLayoutComponent implements OnInit {

    public disabled: boolean = false;
    public status: {isopen: boolean} = {isopen: false};

    private currentUser: CurrentUser;
    // Variable needed for accessing enum in template.
    private roleEnum = Role;

    constructor(private httpService: HttpService) {
        this.currentUser = httpService.getCurrentUser();
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
