const removeFromArray = function(arr, ...args) {
    return arr.filter(item => {
        if (args.includes(item)) return false;
        return true;
    });
};

// Do not edit below this line
module.exports = removeFromArray;