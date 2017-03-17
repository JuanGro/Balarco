// Models
import { ArtWork } from './art-work-model';

describe('ArtWork object model tests.', () => {

  it('Should create an ArtWork object by setting attibutes', () => {
    let id = 1;
    let name = 'MyArt';
    let quantity = 15;

    let artWork: ArtWork = {
      id: id,
      name: name,
      quantity: quantity
    };

    expect(artWork.id).toBe(id);
    expect(artWork.name).toBe(name);
    expect(artWork.quantity).toBe(quantity);
  });


  it('Should create an empty Artwork object', () => {
    let artWork = new ArtWork();

    expect(artWork.id).toBe(undefined);
    expect(artWork.name).toBe(undefined);
    expect(artWork.quantity).toBe(undefined);
  });


  it('Should create an ArtWork object by passing a Json in the constructor', () => {
    let id = 1;
    let name = 'MyArt';
    let quantity = 15;

    let jsonArtWork = {
      id: id,
      name: name,
      quantity: quantity
    };

    let artWork = new ArtWork(jsonArtWork);
    expect(artWork.id).toBe(id);
    expect(artWork.name).toBe(name);
    expect(artWork.quantity).toBe(quantity);
  });

});
