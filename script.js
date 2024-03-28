//ARRAY METHODS

//1. Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).
//a. Get all the countries from Asia continent /region using Filter function


const request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send();
request.onload=function(){
    var data = request.response;
    var result = JSON.parse(data)
    var res = result.filter((ele)=>ele.region==="Asia")
     var final = res.forEach((ele)=>console.log(`"Asia continent" : ${ele.name.common}`))

}

//b. Get all the countries with a population of less than 2 lakhs using Filter function

const request1 = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true);
request.send();

request.onload = function() {
    var data = request.responsee;
    var result = JSON.parse(data);

    var filteredCountries = result.filter((country) => {
        return country.population < 200000;
    });

    filteredCountries.forEach((country) => {
        console.log(country.name.common);
    });
}


//c. Print the following details name, capital, flag, using forEach function

// const request2 = new XMLHttpRequest();
// request2.open("GET", "https://restcountries.com/v3.1/all", true);
// request2.send();

// request2.onload = function() {
//     var data = request2.response;
//     var result = JSON.parse(data);

//     result.forEach((country) => {
//         console.log("Name: " + country.name.common);
//         console.log("Capital: " + country.capital);
//         console.log("Flag: " + country.flags.svg);
//         console.log("------------------------");
//     });
// }


//d. Print the total population of countries using reduce function

// const request3 = new XMLHttpRequest();
// request3.open("GET", "https://restcountries.com/v3.1/all", true);
// request3.send();

// request3.onload = function() {
//     var data = request3.response;
//     var result = JSON.parse(data);

//     const totalPopulation = result.reduce((sum, country) => {
//         return sum + country.population;
//     }, 0);

//     console.log("Total Population of Countries:", totalPopulation);
// }


//e. Print the country that uses US dollars as currency.

// const request4 = new XMLHttpRequest();
// request4.open("GET", "https://restcountries.com/v3.1/all", true);
// request4.send();

// request.onload = function() {
//     var data = request4.response;
//     var result = JSON.parse(data);

//     const countriesWithUSD = result.filter(country => {
//         return country.currencies && country.currencies.USD;
//     });

//     countriesWithUSD.forEach(country => {
//         console.log(`${country.name.common} : " USES US DOLLARS AS CURRENCY."`);
//     });
// }
