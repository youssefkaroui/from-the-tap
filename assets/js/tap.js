const api_url_state = "https://api.openbrewerydb.org/breweries?by_state="
const api_url_city = "https://api.openbrewerydb.org/breweries?by_city="
const searchInputEl= document.querySelector("#search");
const searchBtnEl = document.querySelector("#search-brewery-btn");
const generateFunFact = document.querySelector("#fun-fact");
const api_url_funFact ="https://api.aakhilv.me/fun/facts";
const searchOptionsEl= document.querySelector("#search-options");
const funFactEl= document.querySelector("#fun-fact-container");
const listBreweriesEl=  document.querySelector("#breweries-container");


const inputHandler = function (event) {
    event.preventDefault();

    const userInput = searchInputEl.value.trim();
    console.log(userInput);
    const   select= document.getElementById("search-options")
    const optionPicked= select.options[select.selectedIndex].value;
    console.log(optionPicked);
    if (optionPicked === "state") {
        
        getAndPrintByState(api_url_state, userInput);


    } else if (optionPicked === "city") {

       
        getAndPrintByCity(api_url_city,userInput);

    } else {
        alert("Please enter name of a city or state");
    }
    
};



const getAndPrintByState= function () {
    fetch(api_url_state, searchInputEl)
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {
        if(data.length > 0) {
            breweries = data;
            displayBreweries();
        }
        else {
            throw new Error("No brewery found")
        }

    })
    .catch(function(error) {
        console.log(error.message)
    })

};

const getAndPrintByCity =  function () {
    fetch(api_url_city+searchInputEl)
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {
        if(data.length > 0) {
            breweries = data;
            displayBreweries(breweries);
        }
        else {
            throw new Error("No brewery found")
        }
    })
    .catch(function(error) {
        console.log(error.message)
    })
};

const displayBreweries= function () {
    
    for (var i=o; i<breweries.length; i++) {
        const breweryInformation= createElement("div");
        const nameEl= breweries[i].name;
      const adressEl= breweries[i].street+ ","+ breweries[i].city+","+breweries[i].state+","+breweries[i].country+","+breweries[i].postal_code+".";
      const phoneNumberEl= breweries[i].phone+".";
      const  breweryTypeEl= breweries[i].brewery_type+".";
      const websiteEl= createElement ("a");
      websiteEl.classList= "list-item flex-row justify-space-between align-center";
      websiteEl.setAttribute("href", breweries[i].website_url);

       const brewName= document.createElement("span");
       brewName.textContent=nameEl;
        const brewAdress = document.createElement("span");
        brewAdress.textContent = adressEl;
        const brewPhone= document.createElement("span");
        brewPhone.textContent=phoneNumberEl;
        const brewType=document.createElement("spann");
        brewType=breweryTypeEl;
        const brewWebsite= document.createElement("span");
        brewWebsite.textContent=websiteEl;
        
        
        breweryInformation.appendChild(brewName);
        breweryInformation.appendChild(brewAdress);
        breweryInformation.appendChild(brewPhone);
        breweryInformation.appendChild(brewType);
        breweryInformation.appendChild(brewWebsite);

        listBreweriesEl.appendChild(breweryInformation);



    }
}





const generateAndPrintFunFact= function (){
    fetch(api_url_funFact)
    .then(function(res){
        return res.json();
        

    })
    .then(function(data){
        if(data.length>0){
            funFact=data;
            const funF = document.createElement("span");
            funF.textContent= funFact;
            funFactEl.appendChild(funF);
            


        }
        else{
            throw new Error("No fun fact found")
        }
    })
    .catch (function(error){
        console.log(error.message)

    })
}
generateFunFact.addEventListener("click", generateAndPrintFunFact);






searchBtnEl.addEventListener("click", inputHandler, );