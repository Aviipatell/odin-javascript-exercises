const mapToObjects = require("./mapToObjects");

// Set up test suite
describe("mapToObjects", () => {
  // Set up individual test
  test("test 1", () => {
    let john = { name: "John", surname: "Smith", id: 1 };
    let pete = { name: "Pete", surname: "Hunt", id: 2 };
    let mary = { name: "Mary", surname: "Key", id: 3 };

    let users = [john, pete, mary];
    let usersMapped = mapToObjects(users);
    expect(usersMapped[0].id).toEqual(1);
    expect(usersMapped[0].fullName).toEqual("John Smith");

  });
});
