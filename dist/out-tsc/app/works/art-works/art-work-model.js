var ArtWork = (function () {
    function ArtWork(object) {
        this.id = object && object.id;
        this.name = object && object.name;
        if (object && object.quantity) {
            this.quantity = object && object.quantity;
        }
        else {
            this.quantity = 0;
        }
    }
    return ArtWork;
}());
export { ArtWork };
//# sourceMappingURL=../../../../../src/app/works/art-works/art-work-model.js.map