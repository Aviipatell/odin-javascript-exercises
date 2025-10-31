const sortUsersByAge = require("./sortUsersByAge");

// Set up test suite
describe("sortUsersByAge", () => {
  test("test 1", () => {
    let john = { name: "John", age: 25 };
    let pete = { name: "Pete", age: 30 };
    let mary = { name: "Mary", age: 28 };

    let originalArr = [pete, john, mary];
    let sortedArr = [john, mary, pete];

    expect(sortUsersByAge(originalArr)).toEqual(sortedArr);
  });
});
