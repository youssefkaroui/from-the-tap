const api_url_state = "https://api.openbrewerydb.org/breweries?by_state="
const api_url_city = "https://api.openbrewerydb.org/breweries?by_city="
const searchInputEl = document.querySelector("#search");
const searchBtnEl = document.querySelector("#search-brewery-btn");
const generateFunFact = document.querySelector("#fun-fact");
const api_url_funFact = "https://api.aakhilv.me/fun/facts";
const searchOptionsEl = document.querySelector("#search-options");
const funFactEl = document.querySelector("#fun-fact-container");
const listBreweriesEl = document.querySelector("#breweries-container");


const inputHandler = function (event) {
    event.preventDefault();

    const userInput = searchInputEl.value.trim();
    console.log(userInput);
    const select = document.getElementById("search-options")
    const optionPicked = select.options[select.selectedIndex].value;
    console.log(optionPicked);
    if (optionPicked === "state") {

        getAndPrintBreweries(api_url_state, userInput);


    } else if (optionPicked === "city") {


        getAndPrintBreweries(api_url_city, userInput);

    } else {
        alert("Please enter name of a city or state");
    }

};



function getAndPrintBreweries(api, input) {
    fetch(api + input)
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            console.log(data)
            if (data.length > 0) {
                breweries = data;
                displayBreweries(breweries);
            }
            else {
                throw new Error("No brewery found")
            }

        })
        .catch(function (error) {
            console.log(error)
        })
};



function displayBreweries(breweries) {
listBreweriesEl.innerHTML="";
    for (var i = 0; i < 6; i++) {
        const breweryInformation = document.createElement("div");
        breweryInformation.setAttribute("style", "margin-bottom:5px;")
        const nameEl = breweries[i].name;
        const adressEl = breweries[i].street + ", " + breweries[i].city + ", " + breweries[i].state + ", " + breweries[i].country + ", " + breweries[i].postal_code;
        const phoneNumberEl = breweries[i].phone;
        const breweryTypeEl = breweries[i].brewery_type;
        const websiteEl = breweries[i].website_url

        if (nameEl) {
            const brewName = document.createElement("p");
            brewName.innerHTML = "<strong>Name: </strong>" + nameEl;
            breweryInformation.appendChild(brewName);
        }

        if (adressEl) {
            const brewAdress = document.createElement("p");
            brewAdress.innerHTML = "<strong>Adress: </strong>"+ adressEl;
            breweryInformation.appendChild(brewAdress);

        }
        
        if(phoneNumberEl){
        const brewPhone = document.createElement("p");
        brewPhone.innerHTML = "<strong>Phone number: </strong>" +phoneNumberEl;
        breweryInformation.appendChild(brewPhone);
        }
       
        if (breweryTypeEl) {
        const brewType = document.createElement("p");
        brewType.innerHTML = "<strong>Brewery type: </strong>" +breweryTypeEl;
        breweryInformation.appendChild(brewType);
        }
        
        if (websiteEl) {
        const brewSite = document.createElement("a")
        brewSite.setAttribute("class", "list-item flex-row justify-space-between align-center");
        brewSite.setAttribute("href", breweries[i].website_url);
        brewSite.textContent = "Go to site"
        breweryInformation.appendChild(brewSite);
        }
        
       
        

        listBreweriesEl.appendChild(breweryInformation);



    }
}


const generateAndPrintFunFact = function () {
    fetch(api_url_funFact)
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            if (data.length > 0) {
                funFactEl.innerHTML = "";
                const funF = document.createElement("span");
                funF.textContent = data;
                funFactEl.appendChild(funF);




            }
            else {
                throw new Error("No fun fact found")
            }
        })
        .catch(function (error) {
            console.log(error.message)

        })
}
generateFunFact.addEventListener("click", generateAndPrintFunFact);






searchBtnEl.addEventListener("click", inputHandler);