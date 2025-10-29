const inPlace = require('./inPlace');

describe('inPlace', () => {
    test('[5, 3, 8, 1], 1, 4', () => {

        let original = [5, 3, 8, 1];
        inPlace(original, 1, 4);

        expect(original).toEqual([3, 1]);
    });
});