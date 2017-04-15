import { Pipe, PipeTransform } from '@angular/core';
/*
 * Calculate format date for delivery date
 * Compare dates and use them to return a message
 * Usage:
 *   value | calculateDeliveryDate
 * Example:
 *   {{ work.expected_delivery_date | calculateDeliveryDate }}
 *   formats to: 2/3/2017 or a personilized message
*/
@Pipe({name: 'calculateDeliveryDate'})
export class CalculateDeliveryDatePipe implements PipeTransform {
  transform(date: Date): string {
    let today = new Date();
    let oneDay = 24 * 60 * 60 * 1000;
    let diffDays = Math.round(Math.abs((date.getTime() - today.getTime()) / (oneDay)));

    if (today.getTime() < date.getTime()) {
        if (diffDays <= 5 && diffDays > 0) {
            return 'Quedan ' + diffDays + ' días para la entrega';
        } else if (diffDays === 0) {
            return 'Hoy se entrega el proyecto';
        } else {
            return date.getDay().toString() + '/' + date.getMonth() + '/' + date.getFullYear();
        }
    } else {
        return 'Proyecto atrasado';
    }
  }
}
