import { Injectable } from '@angular/core';
import { ToasterService } from 'angular2-toaster/angular2-toaster';

@Injectable()
export class CustomToastService {

  constructor(private toasterService: ToasterService) { }

  public showSuccessToast(message: string) {
    this.toasterService.pop('success', message, 'Hi');
  }
}
