const insertCards = (team) => {
let cards = [];


return cards.join('')
}

const htmlframe = (team) => {
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

    <header class="container-fluid bg-danger text-center">
        <h1 class="p-5">My Team</h1>
    </header>

    <div class="container-fluid row d-flex align-items-center justify-content-evenly">
        
        ${insertCards(team)}

    </div>
</body>

</html>`
}


module.exports = htmlframe;