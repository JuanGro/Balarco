var Contact = (function () {
    function Contact(jsonText) {
        var json = JSON.parse(jsonText);
        this.id = json && json.id;
        this.name = json && json.name;
        this.client = json && json.client;
        this.charge = json && json.charge;
        this.landline = json && json.landline;
        this.extension = json && json.extension;
        this.mobile_phone_1 = json && json.mobile_phone_1;
        this.mobile_phone_2 = json && json.mobile_phone_2;
        this.email = json && json.email;
        this.alternate_email = json && json.alternate_email;
        this.is_active = json && json.is_active;
    }
    return Contact;
}());
export { Contact };
//# sourceMappingURL=../../../../../src/app/accounts/contacts/contact.js.map