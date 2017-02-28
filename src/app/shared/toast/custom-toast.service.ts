import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { ToasterService, Toast } from 'angular2-toaster/angular2-toaster';

/**
* Generic class (service) that manages creation of toast messages.
* You can create toasts by sending string or a Response object.
**/
@Injectable()
export class CustomToastService {

  //TODO: Add Constants...

  constructor(private toasterService: ToasterService) { }

  /**
  * Creates a toast depending on a Response object.
  * Parameters:
  *   - response: Response received from the request.
  *   - title(Optional): Title for the toast.
  *   - message(Optional): Message for the toast.
  * Returns:
  *   - toast created.
  **/
  public createToast(response: Response, title?: string, message?: string): Toast {
    let type;
    switch (response.status) {
      case 200:
        if (!title) {
          title = 'Operación Exitosa';
        }
        type = 'success';
        message = response.statusText;
        break;
      case 201:
        if (!title) {
          title = 'Objeto Creado';
        }
        type = 'success';
        message = response.statusText;
        break;
      case 400 || 401:
        if (!title) {
          title = 'Operación Fallida';
        }
        if (!message) {
          message = response.statusText
        }
        type = 'error';
        break;
      case 0:
        title = 'No hay conexión';
        message = 'No es posible realizar conexión con servidor';
        type = 'warning';
        break;
      default:
        title = message = type = '';
        console.log('No status supported for toast: STATUS ' + response.status);
        break;
    }
    let toast : Toast = {
        type: type,
        title: title,
        body: message,
        showCloseButton: false
    };
    return toast;
  }

  /**
  * Shows a toast depending on a Response object.
  * Parameters:
  *   - response: Response received from the request.
  *   - title(Optional): Title for the toast.
  *   - message(Optional): Message for the toast.
  **/
  public show(response: Response, title?: string, message?: string) {
    this.toasterService.pop(this.createToast(response, title, message));
  }

}
