import { Component, Input } from '@angular/core';

@Component({
    selector: 'recover-password-form',
    templateUrl: 'recover-password-form.component.html'
})
export class RecoverPasswordFormComponent {
    @Input('username') username: string;
}
