let countryData = [];

let selectedCountry = sessionStorage.getItem("selectedCountry").toLowerCase();
let TotalConfirmed = sessionStorage.getItem("TotalConfirmed");
let TotalDeaths = sessionStorage.getItem("TotalDeaths");
let TotalRecovered = sessionStorage.getItem("TotalRecovered");

const getCountery = async () => {
  const resp = await fetch("https://restcountries.com/v2/all");
  const data = await resp.json();
  countryData = data;

  let myCountry = countryData.find((country) => {
    let countryName = country.name.toLowerCase();
    return countryName === selectedCountry;
  });
  console.log(myCountry);
};

getCountery();
