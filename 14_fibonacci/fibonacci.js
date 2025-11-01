const fibonacci = function(num) {
    let intNum = +num;
    if (intNum < 0) return "OOPS";
    if (intNum == 0) {
        return 0;
    } else if (intNum == 1) {
        return 1;
    } else {
        return fibonacci(intNum-1) + fibonacci(intNum-2)
    }
};

// Do not edit below this line
module.exports = fibonacci;
