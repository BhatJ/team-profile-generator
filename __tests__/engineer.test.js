const Engineer = require("../lib/engineer");

describe("Engineer", () => {
  // The following test suite unit tests the initialisation of a engineer object
  describe("Initialization", () => {
    it("should create an object with a name, id, email, and github profile name if provided valid arguments", () => {
      const engineer = new Engineer("Sarah", 3, "sarah@sarah.com", "sarah234");

      // Check that the properties of the created object match the values passed to the constructor
      expect(engineer.name).toEqual("Sarah");
      expect(engineer.id).toEqual(3);
      expect(engineer.email).toEqual("sarah@sarah.com");
      expect(engineer.github).toEqual("sarah234");
    });

    it("should throw an error if provided no arguments", () => {
      // A test function that tries to create a new engineer object with no paramters
      const cb = () => new Engineer();
      const err = new Error("Unexpected number of parameters");

      // To check that an error is thrown when creating a engineer with no parameters
      expect(cb).toThrowError(err);
    });

    it("should throw an error if provided one argument", () => {
      // A test function that tries to create a new engineer object with one paramter
      const cb = () => new Engineer("Sarah");
      const err = new Error("Unexpected number of parameters");

      // To check that an error is thrown when creating a engineer with no parameters
      expect(cb).toThrowError(err);
    });

    it("should throw an error if provided no arguments", () => {
      // A test function that tries to create a new engineer object with two paramters
      const cb = () => new Engineer("Sarah", 2);
      const err = new Error("Unexpected number of parameters");

      // To check that an error is thrown when creating a engineer with no parameters
      expect(cb).toThrowError(err);
    });

    it("should throw an error if provided no arguments", () => {
      // A test function that tries to create a new engineer object with three paramters
      const cb = () => new Engineer("Sarah", 2, "sarah@sarah.com");
      const err = new Error("Unexpected number of parameters");

      // To check that an error is thrown when creating a engineer with no parameters
      expect(cb).toThrowError(err);
    });
  });

  // The following test suite unit tests the getName method
  describe("getName", () => {
    it("should test that getName returns the expected name", () => {

      // Create an emplengineeroyee object with expected parameters
      const engineer = new Engineer("Sarah", 3, "sarah@sarah.com", "sarah234");

      // Use getName method to get the engineer's name
      const name = engineer.getName();

      // Check that the retrived name is the expected name
      expect(name).toEqual(engineer.name);
    });
  });

  // The following test suite unit tests the getId method
  describe("getId", () => {
    it("should test that getId returns the expected id", () => {

      // Create an engineer object with expected parameters
      const engineer = new Engineer("Sarah", 5, "sarah@sarah.com", "sarah234");

      // Use getId method to get the engineer's ID
      const id = engineer.getId();

      // Check that the retrived name is the expected ID
      expect(id).toEqual(engineer.id);
    });
  });

  // The following test suite unit tests the getEmail method
  describe("getEmail", () => {
    it("should test that getEmail returns the expected email address", () => {

      // Create an engineer object with expected parameters
      const engineer = new Engineer("Sarah", 3, "sarah@sarah.com.au", "sarah234");

      // Use getEmail method to get the engineer's email address
      const email = engineer.getEmail();

      // Check that the retrived name is the expected email address
      expect(email).toEqual(engineer.email);
    });
  });

  // The following test suite unit tests the getGithub method
  describe("getGithub", () => {
    it("should test that getGithib returns the expected github profile name", () => {

      // Create an engineer object with expected parameters
      const engineer = new Engineer("Sarah", 3, "sarah@sarah.com.au", "sarah234");

      // Use getEmail method to get the engineer's github profile name
      const githib = engineer.getGithub();

      // Check that the retrived name is the expected github profile name
      expect(githib).toEqual(engineer.github);
    });
  });

  // The following test suite unit tests the getRole method
  describe("getRole", () => {
    it("should test that getRole returns the expected role", () => {

      // Create an engineer object with expected parameters
      const engineer = new Engineer("Sarah", 3, "sarah@sarah.com", "sarah234");

      // Use getRole method to get the engineer's role
      const role = engineer.getRole();

      // Check that the retrived name is the expected role
      expect(role).toEqual('Engineer');
    });
  });
});
