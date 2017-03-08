var Iguala = (function () {
    function Iguala(json) {
        this.id = json && json.id;
        this.name = json && json.name;
        this.client = json && json.client;
        var startDateString = json && json.start_date;
        if (startDateString) {
            var valuesStart = startDateString.split('-');
            var startYear = +valuesStart[0];
            var startMonth = +valuesStart[1] - 1;
            var startDay = +valuesStart[2];
            this.start_date = new Date(startYear, startMonth, startDay);
        }
        var endDateString = json && json.end_date;
        if (endDateString) {
            var valuesEnd = endDateString.split('-');
            var endYear = +valuesEnd[0];
            var endMonth = +valuesEnd[1] - 1;
            var endDay = +valuesEnd[2];
            this.end_date = new Date(endYear, endMonth, endDay);
        }
    }
    Iguala.prototype.generateJSONForPOST = function () {
        var newIgualaJSON = {};
        if (this.id) {
            newIgualaJSON['id'] = this.id;
        }
        newIgualaJSON['name'] = this.name;
        newIgualaJSON['client'] = this.client;
        newIgualaJSON['start_date'] = this.start_date.getUTCFullYear() + "-" +
            (this.start_date.getUTCMonth() + 1) + "-" +
            this.start_date.getUTCDate();
        newIgualaJSON['end_date'] = this.end_date.getUTCFullYear() + "-" +
            (this.end_date.getUTCMonth() + 1) + "-" +
            this.end_date.getUTCDate();
        return newIgualaJSON;
    };
    return Iguala;
}());
export { Iguala };
//# sourceMappingURL=../../../../../src/app/accounts/igualas/iguala-model.js.map