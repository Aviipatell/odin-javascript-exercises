// Function that gets an array arr and removes from it all values except those that are between a and b
const inPlace = function (arr, a, b) {
  let filteredArr = arr.filter((item) => {
    if (item >= a && item <= b) return true;
  });
  arr.length = 0;
  arr.push(...filteredArr);

  // Setting arr = filtered would remove the reference arr has to the arr array outside of the function scope. 
  // An alternative is to loop through the items of arr one by one and splice all items that don't meat the criteria
};

module.exports = inPlace;
