fetch("https://shrouded-forest-37296.herokuapp.com/https://api.brewersfriend.com/v1/recipes/578357", {
    method: 'GET',
    headers: {
        'X-API-KEY': '7f2d94b78d8cae885f240d0d52902a04b93f0de5',
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
})
.then(response => response.json())
.then((data) => console.log(data))
.catch(error => console.error(error));