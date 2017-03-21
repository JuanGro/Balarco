import { Client } from './../clients/client-model';
import { ArtWork } from './../../general-user/works/art-works/art-work-model';
var Iguala = (function () {
    function Iguala(object) {
        this.id = object && object.id;
        this.name = object && object.name;
        this.client = object && object.client;
        this.client_complete = object && new Client(object.client_complete);
        if (object && object.start_date instanceof Date) {
            this.start_date = object.start_date;
        }
        else {
            var startDateString = object && object.start_date;
            if (startDateString) {
                var valuesStart = startDateString.split('-');
                var startYear = +valuesStart[0];
                var startMonth = +valuesStart[1] - 1;
                var startDay = +valuesStart[2];
                this.start_date = new Date(startYear, startMonth, startDay);
            }
        }
        if (object && object.end_date instanceof Date) {
            this.end_date = object.end_date;
        }
        else {
            var endDateString = object && object.end_date;
            if (endDateString) {
                var valuesEnd = endDateString.split('-');
                var endYear = +valuesEnd[0];
                var endMonth = +valuesEnd[1] - 1;
                var endDay = +valuesEnd[2];
                this.end_date = new Date(endYear, endMonth, endDay);
            }
        }
        this.art_iguala = [];
        if (object && object.art_iguala) {
            for (var _i = 0, _a = object.art_iguala; _i < _a.length; _i++) {
                var art = _a[_i];
                this.art_iguala.push(new ArtWork({ id: art.art_type, name: art.art_type_name, quantity: art.quantity }));
            }
        }
    }
    Iguala.prototype.generateJSONForPOST = function () {
        var newIgualaJSON = {};
        if (this.id) {
            newIgualaJSON['id'] = this.id;
        }
        newIgualaJSON['name'] = this.name;
        newIgualaJSON['client'] = this.client;
        newIgualaJSON['start_date'] = this.start_date.getUTCFullYear() + '-' +
            (this.start_date.getUTCMonth() + 1) + '-' +
            this.start_date.getUTCDate();
        newIgualaJSON['end_date'] = this.end_date.getUTCFullYear() + '-' +
            (this.end_date.getUTCMonth() + 1) + '-' +
            this.end_date.getUTCDate();
        var artIgualaArray = [];
        for (var _i = 0, _a = this.art_iguala; _i < _a.length; _i++) {
            var artWork = _a[_i];
            artIgualaArray.push({ art_type: artWork.id, quantity: artWork.quantity });
        }
        newIgualaJSON['art_iguala'] = artIgualaArray;
        console.log('newIgualaJSON');
        console.log(newIgualaJSON);
        return newIgualaJSON;
    };
    return Iguala;
}());
export { Iguala };
//# sourceMappingURL=../../../../../src/app/accounts/igualas/iguala-model.js.map