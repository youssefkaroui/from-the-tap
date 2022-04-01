const api_url = "https://api.openbrewerydb.org/breweries"
const api_url_city = "https://api.openbrewerydb.org/breweries?by_city="

// var, let, const





function getAndPrintAllBreweries(url,cb) {
    fetch(url)
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

getAndPrintAllBreweries(api_url, printBreweries)
getAndPrintByCity(api_url_city, "los_angeles", printBreweries)


function printBreweries() {
    console.log(breweries)
}


