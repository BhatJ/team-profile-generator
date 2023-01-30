// A class to represent a generic employee
class Employee {
  constructor(name, id, email) {

    // If any of the parameters passed to the constructor are undefined, throw an error
    if (name === undefined || id === undefined || email === undefined)
    {
      throw new Error("Unexpected number of parameters");
    }

    // Set the name, id, and email fields
    this.name = name;
    this.id = id;
    this.email = email;
  }

  // A method to return the employees name
  getName() {
    return this.name;
  }

  // A method to return the employees ID
  getId() {
    return this.id;
  }

  // A method to return the employees email address
  getEmail() {
    return this.email;
  }

  // A method to return the employees Role
  getRole() {
    return 'Employee';
  }
}

module.exports = Employee;
