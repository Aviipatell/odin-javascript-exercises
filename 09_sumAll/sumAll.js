const sumAll = function(a, b) {
    // Return error if either number is not positive
    if (a < 0 || b < 0 || !Number.isInteger(a) || !Number.isInteger(b)) return "ERROR";

    // Better way is to use Number.isInteger() built in method

    // Swap if a > b
    if (a > b) {
        let temp = a;
        a = b;
        b = temp;
    }
    let runningSum = 0;
    for (let i = a; i <= b; ++i) {
        runningSum+= i;
    }
    return runningSum;
};

// Do not edit below this line
module.exports = sumAll;
