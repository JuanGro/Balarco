import { Iguala } from '../../accounts/igualas/iguala-model';
import { Contact } from '../../accounts/contacts/contact-model';
import { ArtWork } from './art-works/art-work-model';
import { WorkType } from './work-type/work-type-model';
import { Status } from './status/status-model';
var Work = (function () {
    function Work(object) {
        this.executive_id = 1;
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
            this.contact = object.contact;
            this.contact_complete = new Contact(object.contact_complete);
            this.work_type = object.work_type;
            this.work_type_complete = new WorkType(object.work_type_complete);
            this.current_status = object.current_status;
            this.current_status_complete = new Status(object.current_status_complete);
            this.iguala = object.iguala;
            this.iguala_complete = new Iguala(object.iguala_complete);
            this.art_works = [];
            if (object.art_works) {
                for (var _i = 0, _a = object.art_works; _i < _a.length; _i++) {
                    var artWork = _a[_i];
                    if (!artWork.name && artWork.art_type_complete) {
                        this.art_works.push(new ArtWork({ id: artWork.art_type, name: artWork.art_type_complete.name, quantity: artWork.quantity }));
                    }
                    else {
                        this.art_works.push(new ArtWork(artWork));
                    }
                }
            }
        }
    }
    Work.prototype.generateJSONForPOST = function () {
        var newWorkJSON = {};
        newWorkJSON['name'] = this.name;
        newWorkJSON['expected_delivery_date'] = this.expected_delivery_date.getUTCFullYear() + '-' +
            (this.expected_delivery_date.getUTCMonth() + 1) + '-' +
            this.expected_delivery_date.getUTCDate();
        newWorkJSON['executive'] = this.executive_id;
        newWorkJSON['contact'] = +this.contact;
        newWorkJSON['current_status'] = +this.current_status;
        newWorkJSON['work_type'] = +this.work_type;
        if (this.id) {
            newWorkJSON['id'] = this.id;
        }
        if (this.iguala && this.work_type_id_enum == 1) {
            newWorkJSON['iguala'] = +this.iguala;
        }
        if (this.brief) {
            newWorkJSON['brief'] = this.brief;
        }
        if (this.final_link) {
            newWorkJSON['final_link'] = this.final_link;
        }
        var artWorksArray = [];
        if (this.art_works && (this.work_type_id_enum == 1 || this.work_type_id_enum == 2)) {
            for (var _i = 0, _a = this.art_works; _i < _a.length; _i++) {
                var artWork = _a[_i];
                artWorksArray.push({ art_type: artWork.id, quantity: artWork.quantity });
            }
        }
        newWorkJSON['art_works'] = artWorksArray;
        newWorkJSON['work_designers'] = [];
        return newWorkJSON;
    };
    return Work;
}());
export { Work };
//# sourceMappingURL=../../../../../src/app/general-user/works/work-model.js.map