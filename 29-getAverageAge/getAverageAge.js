const getAverageAge = function(users) {
    let runningSum = 0;
    let count = 0;
    for (const user of users) {
        if (user.age) {
            runningSum+= user.age;
            ++count;
        }
    }
    return count != 0 ? runningSum / count : -1;
};

module.exports = getAverageAge;