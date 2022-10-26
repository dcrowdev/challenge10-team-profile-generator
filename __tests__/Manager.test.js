const Manager = require('../lib/Manager');
describe('Manager Test', () => {
  it("should return an object containing the managers name, id, email, and officenumber", () => {
    const employee = new Manager('Dylan', '2', 'dcrowdev1025@gmail.com', '333-333-3333');
    expect(employee.officenumber).toBe('333-333-3333');
    expect(employee.getOfficeNumber()).toBe('333-333-3333');
    expect(employee.getRole()).toBe('Manager')
  })
})