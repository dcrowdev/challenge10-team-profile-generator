const Intern = require('../lib/Intern');
test ('Intern Test', () => {
    const employee = new Intern('Dylan', '3', 'dcrowdev1025@gmail.com', 'UCF');
    expect(employee.school).toBe('UCF')
    expect(employee.getSchool()).toBe('UCF');
    expect(employee.getRole()).toBe('Intern')
})