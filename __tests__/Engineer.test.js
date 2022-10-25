const Engineer = require('../lib/Engineer');
test ('Engineer Test', () => {
    const employee = new Engineer('Dylan', '2', 'dcrowdev1025@gmail.com', 'dcrowdev');
    expect(employee.github).toBe('dcrowdev')
    expect(employee.getGithub()).toBe('dcrowdev');
    expect(employee.getRole()).toBe('Engineer')
})