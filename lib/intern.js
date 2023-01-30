const Employee = require("./employee");

// Create an 'Intern' class that extends 'Employee'
class Intern extends Employee {
  constructor(name, id, email, school) {

    // If any parameter is undefined, throw an error
    if (name === undefined || id === undefined || email === undefined || school === undefined)
    {
      throw new Error("Unexpected number of parameters");
    }

    // Initialise the object using the Employee constructor
    super(name, id, email);

    // Add new school field
    this.school = school;
  }

  // Return the intern's school name
  getSchool() {
    return this.school;
  }

  // Override the getRole method. Return 'Intern'.
  getRole() {
    return 'Intern';
  }
}

module.exports = Intern;
