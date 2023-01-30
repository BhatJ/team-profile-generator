const Manager = require("../lib/manager");

describe("Manager", () => {
  // The following test suite unit tests the initialisation of a manager object
  describe("Initialization", () => {
    it("should create an object with a name, id, email, and github profile name if provided valid arguments", () => {
      const manager = new Manager("Sarah", 3, "sarah@sarah.com", 203);

      // Check that the properties of the created object match the values passed to the constructor
      expect(manager.name).toEqual("Sarah");
      expect(manager.id).toEqual(3);
      expect(manager.email).toEqual("sarah@sarah.com");
      expect(manager.officeNumber).toEqual(203);
    });

    it("should throw an error if provided no arguments", () => {
      // A test function that tries to create a new manager object with no paramters
      const cb = () => new Manager();
      const err = new Error("Unexpected number of parameters");

      // To check that an error is thrown when creating a manager with no parameters
      expect(cb).toThrowError(err);
    });

    it("should throw an error if provided one argument", () => {
      // A test function that tries to create a new manager object with one paramter
      const cb = () => new Manager("Sarah");
      const err = new Error("Unexpected number of parameters");

      // To check that an error is thrown when creating a manager with no parameters
      expect(cb).toThrowError(err);
    });

    it("should throw an error if provided no arguments", () => {
      // A test function that tries to create a new manager object with two paramters
      const cb = () => new Manager("Sarah", 2);
      const err = new Error("Unexpected number of parameters");

      // To check that an error is thrown when creating a manager with no parameters
      expect(cb).toThrowError(err);
    });

    it("should throw an error if provided no arguments", () => {
      // A test function that tries to create a new manager object with three paramters
      const cb = () => new Manager("Sarah", 2, "sarah@sarah.com");
      const err = new Error("Unexpected number of parameters");

      // To check that an error is thrown when creating a manager with no parameters
      expect(cb).toThrowError(err);
    });
  });

  // The following test suite unit tests the getName method
  describe("getName", () => {
    it("should test that getName returns the expected name", () => {

      // Create an manager object with expected parameters
      const manager = new Manager("Sarah", 3, "sarah@sarah.com", 203);

      // Use getName method to get the manager's name
      const name = manager.getName();

      // Check that the retrived name is the expected name
      expect(name).toEqual(manager.name);
    });
  });

  // The following test suite unit tests the getId method
  describe("getId", () => {
    it("should test that getId returns the expected id", () => {

      // Create an manager object with expected parameters
      const manager = new Manager("Sarah", 5, "sarah@sarah.com", "203");

      // Use getId method to get the manager's ID
      const id = manager.getId();

      // Check that the retrived name is the expected ID
      expect(id).toEqual(manager.id);
    });
  });

  // The following test suite unit tests the getEmail method
  describe("getEmail", () => {
    it("should test that getEmail returns the expected email address", () => {

      // Create an manager object with expected parameters
      const manager = new Manager("Sarah", 3, "sarah@sarah.com.au", "203");

      // Use getEmail method to get the manager's email address
      const email = manager.getEmail();

      // Check that the retrived name is the expected email address
      expect(email).toEqual(manager.email);
    });
  });

  // The following test suite unit tests the getOfficeNumber method
  describe("getOfficeNumber", () => {
    it("should test that getOfficeNumber returns the expected office number", () => {

      // Create an manager object with expected parameters
      const manager = new Manager("Sarah", 3, "sarah@sarah.com.au", "203");

      // Use getEmail method to get the manager's github profile name
      const officeNumber = manager.getOfficeNumber();

      // Check that the retrived name is the expected github profile name
      expect(officeNumber).toEqual(manager.officeNumber);
    });
  });

  // The following test suite unit tests the getRole method
  describe("getRole", () => {
    it("should test that getRole returns the expected role", () => {

      // Create an manager object with expected parameters
      const manager = new Manager("Sarah", 3, "sarah@sarah.com", "sarah234");

      // Use getRole method to get the manager's role
      const role = manager.getRole();

      // Check that the retrived name is the expected role
      expect(role).toEqual('Manager');
    });
  });
});
