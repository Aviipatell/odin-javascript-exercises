const getAverageAge = require("./getAverageAge");

// Set up test suite
describe("getAverageAge", () => {
  // Set up test
  test("test 1", () => {
    let john = { name: "John", age: 25 };
    let pete = { name: "Pete", age: 30 };
    let mary = { name: "Mary", age: 29 };

    let arr = [john, pete, mary];
    expect(getAverageAge(arr)).toEqual(28);
  });
});
