const api_url_state = "https://api.openbrewerydb.org/breweries?by_state="
const api_url_city = "https://api.openbrewerydb.org/breweries?by_city="
const searchInputEl= document.querySelector("#search");
const searchBtnEl = document.querySelector("#search-brewery-btn");
const generateRecipeBtnEl = document.querySelector("#get-beer-recipe");
const api_url_recipe ="https://api.brewersfriend.com/v1/recipes/:recipe_id";
const searchOptionsEl= document.querySelector("#search-options");
const recipeEl= document.querySelector("#recipe-container");
const listBreweriesEl=  document.querySelector("#breweries-container");


const inputHandler = function (event) {
    event.preventDefault();

    const userInput = searchInputEl.value.trim();
    console.log(userInput);
    const   optionPicked= document.getElementById("search-options")
    console.log(optionPicked);
    if (optionPicked === "state") {
        
        getAndPrintByState(userInput);


    } else if (optionPicked === "city") {

       
        getAndPrintByCity(userInput);

    } else {
        alert("Please enter name of a city or state");
    }
    
};
document.getElementById("search-brewery-btn").addEventListener("click", inputHandler());








const getAndPrintByState= function (url, state ,cb) {
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
            throw new Error("No brewery found")
        }
    })
    .catch(function(error) {
        console.log(error.message)
    })
};

const getAndPrintByCity =  function (url, city, cb) {
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
            throw new Error("No brewery found")
        }
    })
    .catch(function(error) {
        console.log(error.message)
    })
};

getAndPrintByState(api_url_state, "ohio", printBreweries);
getAndPrintByCity(api_url_city, "los_angeles", printBreweries);


function printBreweries() {
    console.log(breweries)
}


const getRecipe= function (){
    fetch(api_url_recipe)
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        if(data.length>0){
            recipe=data;

        }
        else{
            throw new Error("No recipe found")
        }
    })
    .catch (function(error){
        console.log(error.message)

    })
};
