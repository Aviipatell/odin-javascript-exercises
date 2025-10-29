const filterRange = require('./filterRange');

describe('filterRange', () => {

    test("[5, 3, 8, 1], 1, 4", () => {
        expect(filterRange([5, 3, 8, 1], 1, 4)).toEqual([3, 1]);
    });

});