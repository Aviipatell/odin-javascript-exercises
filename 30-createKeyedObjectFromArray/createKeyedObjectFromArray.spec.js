const groupById = require("./createKeyedObjectFromArray");

// Set up test suite
describe("groupById", () => {
  test("test1", () => {
    let users = [
      { id: "john", name: "John Smith", age: 20 },
      { id: "ann", name: "Ann Smith", age: 24 },
      { id: "pete", name: "Pete Peterson", age: 31 },
    ];

    let usersById = groupById(users);
    let expectedOutput = {
      john: { id: "john", name: "John Smith", age: 20 },
      ann: { id: "ann", name: "Ann Smith", age: 24 },
      pete: { id: "pete", name: "Pete Peterson", age: 31 },
    };

    expect(usersById).toEqual(expectedOutput);
    
  });
});
