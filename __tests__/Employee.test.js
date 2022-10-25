const Employee = require('../lib/Employee');
test ('Employee Test', () => {
    const employee = new Employee('Dylan', '0', 'dcrowdev1025@gmail.com');
    expect(employee.name).toBe('Dylan');
    expect(employee.id).toBe('0');
    expect(employee.email).toBe('dcrowdev1025@gmail.com');
    expect(employee.getName()).toBe('Dylan');
    expect(employee.getId()).toBe('0');
    expect(employee.getEmail()).toBe('dcrowdev1025@gmail.com');
})