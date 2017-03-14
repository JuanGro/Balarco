var Client = (function () {
    function Client(jsonText) {
        var json = JSON.parse(jsonText);
        this.id = json && json.id;
        this.name = json && json.name;
        this.address = json && json.address;
    }
    return Client;
}());
export { Client };
//# sourceMappingURL=../../../../../src/app/accounts/companies-list/client.js.map