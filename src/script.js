let countryData = [];
let covidData = [];

const getCountery = async () => {
  const resp = await fetch("https://restcountries.com/v2/all");
  const data = await resp.json();
  countryData = data;
};

const getCovidData = async () => {
  const resp = await fetch("https://api.covid19api.com/summary");
  const data = await resp.json();
  covidData = data.Countries;
};

const createCard = (i) => {
  //Create Card
  let linkCrad = document.createElement("a");
  linkCrad.href = "/details.html";

  let card = document.createElement("div");
  //Card should stay hidden initially
  card.classList.add("card");

  //container
  let container = document.createElement("div");
  container.classList.add("container");
  //country name
  let name = document.createElement("h4");
  name.classList.add("country-name");
  name.innerText = i.Country.toUpperCase();
  container.appendChild(name);
  //cases
  let cases = document.createElement("h6");
  cases.innerText = "Cases: " + i.TotalConfirmed;
  container.appendChild(cases);
  //deaths
  let deaths = document.createElement("h6");
  deaths.innerText = "Deaths: " + i.TotalDeaths;
  container.appendChild(deaths);

  //more details
  let details = document.createElement("h6");
  details.innerText = "More Details";
  container.appendChild(details);

  card.appendChild(container);
  linkCrad.appendChild(card);
  document.getElementById("country").appendChild(linkCrad);
};

const removeCrad = () => {
  let card = document.getElementById("country");
  while (card.firstChild) {
    card.removeChild(card.firstChild);
  }
};

getCovidData();
getCountery();

let filteredCovidData = [];
let selectedCountry = "bangladesh";

const searchInput = document.getElementById("search-input");
searchInput.addEventListener("input", (event) => {
  const str = searchInput.value;
  const lowerStr = str.toLowerCase();
  if (lowerStr.length > 1) {
    filteredCovidData = [];
    removeCrad();
    covidData.forEach((data) => {
      const name = data.Country;
      const lowerName = name.toLowerCase();
      if (lowerName.indexOf(lowerStr) > -1) {
        filteredCovidData.push(data);
      }
    });
    filteredCovidData.forEach((data) => createCard(data));
  } else {
    filteredCovidData = [];
    removeCrad();
  }
});

window.onload = function () {
  searchInput.value = "";
};
