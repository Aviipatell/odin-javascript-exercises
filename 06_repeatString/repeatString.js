const repeatString = function(str, numOfRepitions) {
    if (numOfRepitions < 0) return "ERROR";
    let newStr = "";
    for (let i = 0; i < numOfRepitions; ++i) {
        newStr += str;
    }
    return newStr;
};

// Do not edit below this line
module.exports = repeatString;
