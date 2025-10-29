const sortDecreasingOrder = require('./sortDecreasingOrder');

describe('sortDecreasingOrder', () => {

    test('[5, 2, 1, -10, 8', () => {
        let arr = [5, 2, 1, -10, 8];
        sortDecreasingOrder(arr);
        expect(arr).toEqual([8, 5, 2, 1, -10]);
    });

});