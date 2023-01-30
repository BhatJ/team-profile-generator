class Employee {
  constructor(name, id, email) {

    if (name === undefined || id === undefined || email === undefined)
    {
      throw new Error("Unexpected number of parameters");
    }

    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return 'Employee';
  }
}

module.exports = Employee;
