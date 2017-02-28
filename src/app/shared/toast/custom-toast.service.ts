import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { ToasterService } from 'angular2-toaster/angular2-toaster';

/**
* Generic class (service) that manages creation of toast messages.
* You can create toasts by sending string or a Response object.
**/
@Injectable()
export class CustomToastService {

  constructor(private toasterService: ToasterService) { }

  /**
  * Creates a toast depending on a success flag.
  * Parameters:
  *   - success: Flag representing success status of request.
  *   - message: Message to be shown in the toast.
  *   - title(Optional): Title for the toast.
  **/
  public showWithMessage(success: boolean, message: string, title?: string) {
    if (success) {
      if (!title) {
        title = 'Operación Exitosa';
      }
      this.toasterService.pop('success', title, message);
    } else {
      if (!title) {
        title = 'Operación Fallida';
      }
      this.toasterService.pop('error', title, message);
    }
  }

  /**
  * Creates a toast depending on a Response object.
  * Parameters:
  *   - response: Response received from the request.
  *   - title(Optional): Title for the toast.
  *   - message(Optional): Message for the toast.
  **/
  public show(response: Response, title?: string, message?: string) {
    switch (response.status) {
      case 200: {
        if (!title) {
          title = 'Operación Exitosa';
        }
        this.toasterService.pop('success', title, response.statusText);
        break;
      }
      case 201: {
        if (!title) {
          title = 'Objeto Creado';
        }
        this.toasterService.pop('success', title, response.statusText);
        break;
      }
      case 400 || 401: {
        if (!title) {
          title = 'Operación Fallida';
        }
        if (message) {
          this.toasterService.pop('error', title, message);
        } else {
          this.toasterService.pop('error', title, response.statusText);
        }
        break;
      }
      case 0: {
        title = 'No hay conexión';
        message = 'No es posible realizar conexión con servidor';
        this.toasterService.pop('warning', title, message);
        break;
      }
      default: {
        console.log('No status supported for toast: STATUS ' + response.status);
        break;
      }
    }
  }

}
