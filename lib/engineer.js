const Employee = require("./employee");

// Create an 'Engineer' class that extends 'Eployee'
class Engineer extends Employee {
  constructor(name, id, email, github) {

    // If any parameter is undefined, throw an error
    if (name === undefined || id === undefined || email === undefined || github === undefined)
    {
      throw new Error("Unexpected number of parameters");
    }

    // Initialise the object using the Eployee constructor
    super(name, id, email);

    // Add new github field
    this.github = github;
  }

  // Return the engineers github profile name
  getGithub() {
    return this.github;
  }

  // Override the getRole method. Return 'Engineer'.
  getRole() {
    return 'Engineer';
  }
}

module.exports = Engineer;
