const genManager = (manager) => {
    return `<div class="card m-3 row-col-3 p-0" style="width: 18rem;">
            <div class="card-header text-white bg-primary">
                <h3 class="card-title">${manager.name}</h3>
                <h5 class="card-text">Manager</h5>
            </div>
            <div class="card-body bg-secondary">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${manager.id}</li>
                <li class="list-group-item">Email: ${manager.email}</li>
                <li class="list-group-item">Office Number: ${manager.officenumber}</li>
            </ul>
            </div>
        </div>`
}

const genEngineer = (engineer) => {
    return `<div class="card m-3 row-col-3 p-0" style="width: 18rem;">
            <div class="card-header text-white bg-primary">
                <h3 class="card-title">${engineer.name}</h3>
                <h5 class="card-text">Engineer</h5>
            </div>
            <div class="card-body bg-secondary">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${engineer.id}</li>
                <li class="list-group-item">Email: ${engineer.email}</li>
                <li class="list-group-item">Github: ${engineer.officenumber}</li>
            </ul>
            </div>
        </div>`
}

const genIntern = (intern) => {
    return `<div class="card m-3 row-col-3 p-0" style="width: 18rem;">
            <div class="card-header text-white bg-primary">
                <h3 class="card-title">${intern.name}</h3>
                <h5 class="card-text">Intern</h5>
            </div>
            <div class="card-body bg-secondary">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${intern.id}</li>
                <li class="list-group-item">Email: ${intern.email}</li>
                <li class="list-group-item">School: ${intern.officenumber}</li>
            </ul>
            </div>
        </div>`
}


const insertCards = (team) => {
let cards = [];
for (let i = 0; i < team.length; i++) {
    const employee = team[i];
    const role = employee.getRole()

    if (role === 'Manager') {
        const managerCard = genManager(employee)
        cards.push(managerCard)
    } else if (role === 'Engineer') {
        const engineerCard = genEngineer(employee)
        cards.push(engineerCard)
    } else if (role === 'Intern') {
        const internCard = genIntern(employee)
        cards.push(internCard)
    }
}

return cards.join('')
}

const generateHTML = (team) => {
    return `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <title>Team Profile Generator!</title>
</head>

<body>

    <header class="container-fluid bg-danger text-center row">
        <h1 class="p-5">My Team</h1>
    </header>

    <div class="container-fluid row d-flex align-items-center justify-content-center">
        
        ${insertCards(team)}

    </div>
</body>

</html>`
}


module.exports = generateHTML;