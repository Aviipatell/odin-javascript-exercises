const sortUsersByAge = function(users) {
    // Note, this mutates array- use slice() or toSorted() if you want to simply return a sorted copy
    return users.sort((a, b) => a.age - b.age);
}; 

module.exports = sortUsersByAge;