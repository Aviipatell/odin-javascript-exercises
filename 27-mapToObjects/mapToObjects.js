const mapToObjects = function(users) {
    let arr = [];
    
    for (const user of users) {
        let obj = {
            id: user.id,
            fullName: `${user.name} ${user.surname}`
        };
        arr.push(obj);
    }

    return arr;

};

module.exports = mapToObjects;