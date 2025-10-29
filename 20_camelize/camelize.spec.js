const camelize = require('./camelize');

describe('camelize', () => {

    test('background-color', () => {
        expect(camelize('background-color')).toEqual('backgroundColor');
    });

    test('list-style-image', () => {
        expect(camelize('list-style-image')).toEqual('listStyleImage');
    });

    test('-webkit-transition', () => {
        expect(camelize('-webkit-transition')).toEqual('WebkitTransition');
    });

});