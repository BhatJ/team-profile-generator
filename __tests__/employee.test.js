const Employee = require("../lib/employee");

describe("Employee", () => {
  // The following test suite unit tests the initialisation of a employee object
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

  // The following test suite unit tests the getName method
  describe("getName", () => {
    it("should test that getName returns the expected name", () => {

      // Create an employee object with expected parameters
      const employee = new Employee("Sarah", 3, "sarah@sarah.com");

      // Use getName method to get the employee's name
      const name = employee.getName();

      // Check that the retrived name is the expected name
      expect(name).toEqual(employee.name);
    });
  });

  // The following test suite unit tests the getId method
  describe("getId", () => {
    it("should test that getId returns the expected id", () => {

      // Create an employee object with expected parameters
      const employee = new Employee("Sarah", 5, "sarah@sarah.com");

      // Use getId method to get the employee's ID
      const id = employee.getId();

      // Check that the retrived name is the expected ID
      expect(id).toEqual(employee.id);
    });
  });

  // The following test suite unit tests the getEmail method
  describe("getEmail", () => {
    it("should test that getEmail returns the expected email address", () => {

      // Create an employee object with expected parameters
      const employee = new Employee("Sarah", 3, "sarah@sarah.com.au");

      // Use getEmail method to get the employee's email address
      const email = employee.getEmail();

      // Check that the retrived name is the expected email address
      expect(email).toEqual(employee.email);
    });
  });

  // The following test suite unit tests the getRole method
  describe("getRole", () => {
    it("should test that getRole returns the expected role", () => {

      // Create an employee object with expected parameters
      const employee = new Employee("Sarah", 3, "sarah@sarah.com");

      // Use getRole method to get the employee's role
      const role = employee.getRole();

      // Check that the retrived name is the expected role
      expect(role).toEqual('Employee');
    });
  });
});
