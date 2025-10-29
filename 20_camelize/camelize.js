// Function that changes dash-separated words like 'my-short-string' into camel-cased 'myShortString'
const camelize = function(str) {
    let arr = str.split("-");
    if (arr.length > 1) {
        for (let i = 1; i < arr.length; ++i) {
            // in this case, substring and slice are equivalent
            arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
        }
    }

    return arr.join("");
}

module.exports = camelize;