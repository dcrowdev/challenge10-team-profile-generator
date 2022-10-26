const Engineer = require('../lib/Engineer');
describe('Engineer Test', () => {
  it("should return an object containing the engineers name, id, email, and github", () => {
    const employee = new Engineer('Dylan', '2', 'dcrowdev1025@gmail.com', 'dcrowdev');
    expect(employee.github).toBe('dcrowdev')
    expect(employee.getGithub()).toBe('dcrowdev');
    expect(employee.getRole()).toBe('Engineer')
  })
})