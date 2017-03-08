var Iguala = (function () {
    function Iguala() {
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