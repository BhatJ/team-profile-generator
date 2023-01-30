const Employee = require("./employee");

// Create an 'Manager' class that extends 'Eployee'
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {

    // If any parameter is undefined, throw an error
    if (name === undefined || id === undefined || email === undefined || officeNumber === undefined)
    {
      throw new Error("Unexpected number of parameters");
    }

    // Initialise the object using the Eployee constructor
    super(name, id, email);

    // Add new officeNumber field
    this.officeNumber = officeNumber;
  }

  // Return the manager's office number
  getOfficeNumber() {
    return this.officeNumber;
  }

  // Override the getRole method. Return 'Manager'.
  getRole() {
    return 'Manager';
  }
}

module.exports = Manager;
