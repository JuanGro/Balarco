import { Iguala } from '../accounts/igualas/iguala-model';
import { Contact } from '../accounts/contacts/contact-model';
import { ArtWork } from './art-works/art-work-model';
import { WorkType } from './work-type/work-type-model';
import { Status } from './status/status-model';
var Work = (function () {
    function Work(object) {
        if (object) {
            this.id = object.id;
            this.name = object.name;
            this.brief = object.brief;
            this.final_link = object.final_link;
            if (object.creation_date instanceof Date) {
                this.creation_date = object.creation_date;
            }
            else {
                var creationDateString = object && object.creation_date;
                if (creationDateString) {
                    var valuesStart = creationDateString.split('-');
                    var startYear = +valuesStart[0];
                    var startMonth = +valuesStart[1] - 1;
                    var startDay = +valuesStart[2];
                    this.creation_date = new Date(startYear, startMonth, startDay);
                }
            }
            if (object.expected_delivery_date instanceof Date) {
                this.expected_delivery_date = object.expected_delivery_date;
            }
            else {
                var deliveryDateString = object && object.expected_delivery_date;
                if (deliveryDateString) {
                    var valuesDelivery = deliveryDateString.split('-');
                    var deliveryYear = +valuesDelivery[0];
                    var deliverytMonth = +valuesDelivery[1] - 1;
                    var deliveryDay = +valuesDelivery[2];
                    this.expected_delivery_date = new Date(deliveryYear, deliverytMonth, deliveryDay);
                }
            }
            this.contact = new Contact(object.contact);
            this.work_type = new WorkType(object.work_type);
            this.status = new Status(object.status);
            this.iguala = new Iguala(object.iguala);
            this.art_works = [];
            if (object.art_works) {
                for (var _i = 0, _a = object.art_works; _i < _a.length; _i++) {
                    var artWork = _a[_i];
                    this.art_works.push(new ArtWork(artWork));
                }
            }
        }
    }
    return Work;
}());
export { Work };
//# sourceMappingURL=../../../../src/app/works/work-model.js.map