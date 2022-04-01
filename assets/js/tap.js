const api_url_state = "https://api.openbrewerydb.org/breweries?by_state="
const api_url_city = "https://api.openbrewerydb.org/breweries?by_city="
const searchInputEl= document.querySelector("#search");
const searchBtnEl = document.querySelector("#search-brewery-btn");
const generateRecipeBtnEl = document.querySelector("#get-beer-recipe");






function getAndPrintByState(url, state ,cb) {
    fetch(url+state)
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {
        if(data.length > 0) {
            breweries = data;
            cb()
        }
        else {
            throw new Error("Nothing found")
        }
    })
    .catch(function(error) {
        console.log(error.message)
    })
}

function getAndPrintByCity(url, city, cb) {
    fetch(url+city)
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {
        if(data.length > 0) {
            breweries = data;
            cb();
        }
        else {
            throw new Error("Nothing found")
        }
    })
    .catch(function(error) {
        console.log(error.message)
    })
}

getAndPrintByState(api_url_state, "ohio", printBreweries);
getAndPrintByCity(api_url_city, "los_angeles", printBreweries);


function printBreweries() {
    console.log(breweries)
}


