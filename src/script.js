let country = {
  data: [
    {
      countryName: "Australia",
      cases: "9,684,642",
      deaths: "12,439",
    },
    {
      countryName: "Austria",
      cases: "4,796,689",
      deaths: "19,215",
    },
    {
      countryName: "Bangladesh",
      cases: "2,007,870",
      deaths: "29,308",
    },
    {
      countryName: "Brazil",
      cases: "34,035,780",
      deaths: "680,239",
      image: "Brazil.jpg",
    },
    {
      countryName: "Chile",
      cases: "4,320,173",
      deaths: "59,840",
    },
    {
      countryName: "Denmark",
      cases: "3,072,250",
      deaths: "6,758",
    },
    {
      countryName: "Finland",
      cases: "1,218,216",
      deaths: "5,251",
    },
    {
      countryName: "Ghana",
      cases: "168,350",
      deaths: "1,458",
    },
  ],
};

for (let i of country.data) {
  //Create Card
  let card = document.createElement("div");
  //Card should stay hidden initially
  card.classList.add("card", "hide");

  //container
  let container = document.createElement("div");
  container.classList.add("container");
  //country name
  let name = document.createElement("h4");
  name.classList.add("country-name");
  name.innerText = i.countryName.toUpperCase();
  container.appendChild(name);
  //cases
  let cases = document.createElement("h6");
  cases.innerText = "Cases: " + i.cases;
  container.appendChild(cases);
  //deaths
  let deaths = document.createElement("h6");
  deaths.innerText = "Deaths: " + i.deaths;
  container.appendChild(deaths);  

  //more details
  let details = document.createElement("h6");
  details.innerText = "More Details";
  container.appendChild(details);  

  card.appendChild(container);
  document.getElementById("country").appendChild(card);
}

//parameter passed from button
function filterCountry(value) {
  //Button class code
  let buttons = document.querySelectorAll(".button-value");
  //select all cards
  let elements = document.querySelectorAll(".card");
  //loop through all cards
  elements.forEach((element) => {
    //display all cards on 'all' button click
    if (value == "all") {
      element.classList.remove("hide");
    } else {
        //hide other elements
        element.classList.add("hide");
      }
    
  });
}

//Search button click
document.getElementById("search").addEventListener("click", () => {
  //initializations
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".country-name");
  let cards = document.querySelectorAll(".card");

  //loop through all elements
  elements.forEach((element, index) => {
    //check if text includes the search value
    if (element.innerText.includes(searchInput.toUpperCase())) {
      //display matching card
      cards[index].classList.remove("hide");
    } else {
      //hide others
      cards[index].classList.add("hide");
    }
  });
});

//Initially display all country
window.onload = () => {
  filterCountry("all");
};