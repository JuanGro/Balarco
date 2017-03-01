import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { ToasterService, Toast } from 'angular2-toaster/angular2-toaster';

/**
* Generic class (service) that manages creation of toast messages.
* You can create toasts by sending string or a Response object.
**/
@Injectable()
export class CustomToastService {

  /**
  * Structure to store the default titles for toasts.
  **/
  private DefaultTitles = {
    title_200: 'Operación Exitosa',
    title_201: 'Objeto Creado',
    title_400_401: 'Operación Fallida',
    title_0: 'No hay conexión'
  };

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
          title = this.DefaultTitles.title_200;
        }
        type = 'success';
        message = response.statusText;
        break;
      case 201:
        if (!title) {
          title = this.DefaultTitles.title_201;
        }
        type = 'success';
        message = response.statusText;
        break;
      case 400:
      case 401:
        if (!title) {
          title = this.DefaultTitles.title_400_401;
        }
        if (!message) {
          message = response.statusText;
        }
        type = 'error';
        break;
      case 0:
        title = this.DefaultTitles.title_0;
        message = 'No es posible realizar conexión con servidor';
        type = 'warning';
        break;
      default:
        title = message = type = '';
        console.log('No status supported for toast: STATUS ' + response.status);
        break;
    }
    let toast: Toast = {
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
    let toast = this.createToast(response, title, message);
    console.log(toast.title);
    this.toasterService.pop(toast);
  }

  /**
  * Method that gets the DefaultTitles structure.
  * It is used in tests.
  * Returns:
  *   - DefaultTitles
  **/
  public getDefaultTiltles() {
    return this.DefaultTitles;
  }

}
