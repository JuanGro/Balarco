import { ArtWork } from './art-work-model';
describe('ArtWork object model tests.', function () {
    it('Should create an ArtWork object by setting attibutes', function () {
        var id = 1;
        var name = 'MyArt';
        var quantity = 15;
        var artWork = {
            id: id,
            name: name,
            quantity: quantity
        };
        expect(artWork.id).toBe(id);
        expect(artWork.name).toBe(name);
        expect(artWork.quantity).toBe(quantity);
    });
    it('Should create an empty Artwork object', function () {
        var artWork = new ArtWork();
        expect(artWork.id).toBe(undefined);
        expect(artWork.name).toBe(undefined);
        expect(artWork.quantity).toBe(undefined);
    });
    it('Should create an ArtWork object by passing a Json in the constructor', function () {
        var id = 1;
        var name = 'MyArt';
        var quantity = 15;
        var jsonArtWork = {
            id: id,
            name: name,
            quantity: quantity
        };
        var artWork = new ArtWork(jsonArtWork);
        expect(artWork.id).toBe(id);
        expect(artWork.name).toBe(name);
        expect(artWork.quantity).toBe(quantity);
    });
});
//# sourceMappingURL=../../../../../src/app/works/art-works/art-work-model.spec.js.map