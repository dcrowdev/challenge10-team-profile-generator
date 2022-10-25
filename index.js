const Manager = require('./lib/Manager');
const inquirer = require('inquirer');
const generateHTML = require('./generateHTML');
const fs = require('fs');
const Engineer = require('./lib/Engineer');

const team = []

const mainMenu = () => {
    inquirer.prompt({
        type: 'list',
        name: 'decision',
        message: 'What type of Employee would you like to create?',
        choices: ['Manager', 'Engineer', 'Intern', 'Build Team']
    }).then(answer => {
          if (answer.decision === 'Manager') {
                addManager()
        } else if (answer.decision === 'Engineer') {
                addEngineer()
        } else if (answer.decision === 'Intern') {
                addIntern()
        } else {
                buildTeam();
        }
        })
}

const addManager = () => {
    inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is the managers name?'
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the managers id?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the managers email?'
    },
    {
        type: 'input',
        name: 'number',
        message: 'What is the managers office number?'
    }
    ]).then(answers => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.number)
        team.push(manager)
        mainMenu();
    })
}

const addEngineer = () => {
    inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is the engineers name?'
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the engineers id?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the engineers email?'
    },
    {
        type: 'input',
        name: 'number',
        message: 'What is the engineers github?'
    }
    ]).then(answers => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
        team.push(engineer)
        mainMenu();
    })
}

const addIntern = () => {
    inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is the interns name?'
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the interns id?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the interns email?'
    },
    {
        type: 'input',
        name: 'number',
        message: 'What is the interns school?'
    }
    ]).then(answers => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
        team.push(intern)
        mainMenu();
    })
}

//buildTeam( (writefile, generatehtml) )


mainMenu();