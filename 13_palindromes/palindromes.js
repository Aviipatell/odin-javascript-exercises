const palindromes = function (str) {
    let filteredStr = str.toLowerCase().split('').filter((item) => {
        return /[a-zA-Z0-9]/.test(item);
    });
    // Note, Array.reverse() is a mutable method so it would cause equality check to always return true
    let reverseStr = filteredStr.toReversed().join("");
    filteredStr = filteredStr.join("");
    
    return (filteredStr === reverseStr);
};

// Do not edit below this line
module.exports = palindromes;
