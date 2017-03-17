// Models
import { ArtWork } from './art-work.model';

describe('ArtWork object model tests.', () => {

  it('Should create an ArtWork object by setting attibutes', () => {
    let name = 'MyArt';
    let id = 1;

    let artWork: ArtWork = {
      id: id,
      name: name,
    };

    expect(artWork.id).toBe(id);
    expect(artWork.name).toBe(name);
  });


  it('Should create an empty Artwork object', () => {
    let artWork = new ArtWork();

    expect(artWork.id).toBe(undefined);
    expect(artWork.name).toBe(undefined);
  });


  it('Should create an ArtWork object by passing a Json in the constructor', () => {
    let name = 'MyArt';
    let id = 1;

    let jsonArtWork = {
      id: id,
      name: name
    };

    let artWork = new ArtWork(jsonArtWork);
    expect(artWork.id).toBe(id);
    expect(artWork.name).toBe(name);
  });

});
