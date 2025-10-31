const mapToName = require("./mapToName");

describe("mapToName", () => {
  test("test 1", () => {
    let john = { name: "John", age: 25 };
    let pete = { name: "Pete", age: 30 };
    let mary = { name: "Mary", age: 28 };
    let users = [john, pete, mary];
    let names = mapToName(users);
    expect(names).toEqual(["John", "Pete", "Mary"]);
  });
});
