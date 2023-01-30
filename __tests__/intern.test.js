const Intern = require("../lib/intern");

describe("Intern", () => {
  // The following test suite unit tests the initialisation of a intern object
  describe("Initialization", () => {
    it("should create an object with a name, id, email, and github profile name if provided valid arguments", () => {
      const intern = new Intern("Sarah", 3, "sarah@sarah.com", "USYD");

      // Check that the properties of the created object match the values passed to the constructor
      expect(intern.name).toEqual("Sarah");
      expect(intern.id).toEqual(3);
      expect(intern.email).toEqual("sarah@sarah.com");
      expect(intern.school).toEqual("USYD");
    });

    it("should throw an error if provided no arguments", () => {
      // A test function that tries to create a new intern object with no paramters
      const cb = () => new Intern();
      const err = new Error("Unexpected number of parameters");

      // To check that an error is thrown when creating a intern with no parameters
      expect(cb).toThrowError(err);
    });

    it("should throw an error if provided one argument", () => {
      // A test function that tries to create a new intern object with one paramter
      const cb = () => new Intern("Sarah");
      const err = new Error("Unexpected number of parameters");

      // To check that an error is thrown when creating a intern with no parameters
      expect(cb).toThrowError(err);
    });

    it("should throw an error if provided no arguments", () => {
      // A test function that tries to create a new intern object with two paramters
      const cb = () => new Intern("Sarah", 2);
      const err = new Error("Unexpected number of parameters");

      // To check that an error is thrown when creating a intern with no parameters
      expect(cb).toThrowError(err);
    });

    it("should throw an error if provided no arguments", () => {
      // A test function that tries to create a new intern object with three paramters
      const cb = () => new Intern("Sarah", 2, "sarah@sarah.com");
      const err = new Error("Unexpected number of parameters");

      // To check that an error is thrown when creating a intern with no parameters
      expect(cb).toThrowError(err);
    });
  });

  // The following test suite unit tests the getName method
  describe("getName", () => {
    it("should test that getName returns the expected name", () => {

      // Create an intern object with expected parameters
      const intern = new Intern("Sarah", 3, "sarah@sarah.com", "sarah234");

      // Use getName method to get the intern's name
      const name = intern.getName();

      // Check that the retrived name is the expected name
      expect(name).toEqual(intern.name);
    });
  });

  // The following test suite unit tests the getId method
  describe("getId", () => {
    it("should test that getId returns the expected id", () => {

      // Create an intern object with expected parameters
      const intern = new Intern("Sarah", 5, "sarah@sarah.com", "USYD");

      // Use getId method to get the intern's ID
      const id = intern.getId();

      // Check that the retrived name is the expected ID
      expect(id).toEqual(intern.id);
    });
  });

  // The following test suite unit tests the getEmail method
  describe("getEmail", () => {
    it("should test that getEmail returns the expected email address", () => {

      // Create an intern object with expected parameters
      const intern = new Intern("Sarah", 3, "sarah@sarah.com.au", "USYD");

      // Use getEmail method to get the intern's email address
      const email = intern.getEmail();

      // Check that the retrived name is the expected email address
      expect(email).toEqual(intern.email);
    });
  });

  // The following test suite unit tests the getSchool method
  describe("getSchool", () => {
    it("should test that getSchool method returns the expected school", () => {

      // Create an intern object with expected parameters
      const intern = new Intern("Sarah", 3, "sarah@sarah.com.au", "USYD");

      // Use getSchool method to get the intern's school
      const school = intern.getSchool();

      // Check that the retrived name is the expected school
      expect(school).toEqual(intern.school);
    });
  });

  // The following test suite unit tests the getRole method
  describe("getRole", () => {
    it("should test that getRole returns the expected role", () => {

      // Create an intern object with expected parameters
      const intern = new Intern("Sarah", 3, "sarah@sarah.com", "USYD");

      // Use getRole method to get the intern's role
      const role = intern.getRole();

      // Check that the retrived name is the expected role
      expect(role).toEqual('Intern');
    });
  });
});
