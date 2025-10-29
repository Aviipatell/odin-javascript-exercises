// Function that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and returns the result as an array
const filterRange = function(arr, a, b) {
    return arr.filter((item) => {
        if (item >= a && item <= b) return true;
    })
};

module.exports = filterRange;