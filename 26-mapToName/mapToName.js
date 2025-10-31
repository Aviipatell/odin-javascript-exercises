const mapToName = function (users) {
    let arr = [];
    for (const user of users) {
        arr.push(user.name);
    }
    return arr;
};

module.exports = mapToName;