const Intern = require('../lib/Intern');
describe('Intern Test', () => {
   it("should return an object containing the interns name, id, email, and school", () => {
    const employee = new Intern('Dylan', '2', 'dcrowdev1025@gmail.com', 'UCF');
    expect(employee.school).toBe('UCF')
    expect(employee.getSchool()).toBe('UCF');
    expect(employee.getRole()).toBe('Intern')
   })
})