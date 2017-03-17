import { ArtWork } from './art-work.model';
describe('ArtWork object model tests.', function () {
    it('Should create an ArtWork object by setting attibutes', function () {
        var name = 'MyArt';
        var id = 1;
        var artWork = {
            id: id,
            name: name,
        };
        expect(artWork.id).toBe(id);
        expect(artWork.name).toBe(name);
    });
    it('Should create an empty Artwork object', function () {
        var artWork = new ArtWork();
        expect(artWork.id).toBe(undefined);
        expect(artWork.name).toBe(undefined);
    });
    it('Should create an ArtWork object by passing a Json in the constructor', function () {
        var name = 'MyArt';
        var id = 1;
        var jsonArtWork = {
            id: id,
            name: name
        };
        var artWork = new ArtWork(jsonArtWork);
        expect(artWork.id).toBe(id);
        expect(artWork.name).toBe(name);
    });
});
//# sourceMappingURL=../../../../../src/app/works/art-works/art-work.model.spec.js.map