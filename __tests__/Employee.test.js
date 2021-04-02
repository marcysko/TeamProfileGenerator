const Employee = require ('../lib/Employee');

test("Can instantiate Employee instance", () => {
    const e = new Employee();
    expect(typeof(e)).toBe("object");
  });
  
  