const Manager = require('../lib/Manager');
test ('Manager Test', () => {
    const employee = new Manager('Dylan', '1', 'dcrowdev1025@gmail.com', '333-333-3333');
    expect(employee.officenumber).toBe('333-333-3333');
    expect(employee.getOfficeNumber()).toBe('333-333-3333');
    expect(employee.getRole()).toBe('Manager')
})