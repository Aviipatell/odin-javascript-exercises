const groupById = function (users) {
  // Reduce is designed to take a list and reduce it into a single output value.
  // Set accumulator to be {}, and for each element add on to it. 
  const obj = users.reduce((accumulator, current) => {
    accumulator[current.id] = current;
    return accumulator;
  }, {});
  return obj;
};

module.exports = groupById;
