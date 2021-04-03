class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.title = 'Employee';
  }

  getName() {
    return this.name;
	}

  getRole() {
    return this.title;
}

  getEmail() {
		return this.email;
	}

  getId(Id) {
    return this.id;
	}
  }


module.exports = Employee;