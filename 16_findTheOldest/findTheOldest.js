const findTheOldest = function(peopleArr) {
    // Option 1: loop through array with a oldest obj declared outside. Calculate age per element, if older than oldest obj, set current to be new oldest

    // Option 2: use reduce to collapse array into one entity which is the oldest

    // Let accumulator default val be first element, leave option initial value be empty
    return peopleArr.reduce((accumulator, current) => {
        if (getAge(current) > getAge(accumulator)) {
            accumulator = current;
            return accumulator;
        } else {
            return accumulator;
        }
    });
};

const getAge = function(person) {
    let age;
    if (person.yearOfDeath) {
        age = person.yearOfDeath - person.yearOfBirth;
    } else {
        age = new Date().getFullYear() - person.yearOfBirth;
    }
    return age;
}

// Do not edit below this line
module.exports = findTheOldest;
