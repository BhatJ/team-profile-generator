const Employee = require("../lib/employee");

describe("Employee", () => {
  // The following test suite unit tests the initialisation of a child object
  describe("Initialization", () => {
    it("should create an object with a name, id and email if provided valid arguments", () => {
      const employee = new Employee("Sarah", 3, "sarah@sarah.com");

      // Check that the properties of the created object match the values passed to the constructor
      expect(employee.name).toEqual("Sarah");
      expect(employee.id).toEqual(3);
      expect(employee.email).toEqual("sarah@sarah.com");
    });

    it("should throw an error if provided no arguments", () => {
      // A test function that tries to create a new employee object with no paramters
      const cb = () => new Employee();
      const err = new Error("Unexpected number of parameters");

      // To check that an error is thrown when creating a employee with no parameters
      expect(cb).toThrowError(err);
    });

    it("should throw an error if provided one argument", () => {
      // A test function that tries to create a new employee object with one paramter
      const cb = () => new Employee("Sarah");
      const err = new Error("Unexpected number of parameters");

      // To check that an error is thrown when creating a employee with no parameters
      expect(cb).toThrowError(err);
    });

    it("should throw an error if provided no arguments", () => {
      // A test function that tries to create a new employee object with two paramters
      const cb = () => new Employee("Sarah", 2);
      const err = new Error("Unexpected number of parameters");

      // To check that an error is thrown when creating a employee with no parameters
      expect(cb).toThrowError(err);
    });
  });
});
