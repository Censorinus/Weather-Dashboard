//Set global variables
const apiKey = "d5a31c547245680a0f00b2ffe15f45df";
var searchButton = document.querySelector("#search-btn");
var repoContainerEl = document.querySelector("#repos-container");
var searchArr = [];
var searchArrTwo = [];
//City search
async function getCityDetails(event) {
  event.preventDefault();
  var searchInput = $("#search-input").val();
  console.log(searchInput, "searchInput");
  try {
    const cityWeatherRes = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&appid=${apiKey}&units=imperial`
    );
    console.log("citywweatherres", cityWeatherRes);
    searchArr = cityWeatherRes.data;
  } catch (err) {
    //If there's a smelly error
    console.log(err);
  }
  //Clear searchbar
  $("#forecast-form")[0].reset();
  getMoreDetails();
}
//Other API for current date
async function getMoreDetails() {
  try {
    const cityWeatherResTwo = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${searchArr.coord.lat}&lon=${searchArr.coord.lon}&units=imperial&appid=${apiKey}`
    );
    console.log("citywweatherrestwo", cityWeatherResTwo);
    searchArrTwo = cityWeatherResTwo.data;
  } catch (err) {
    //If there's an error
    console.log(err);
  }
  displayForecast();
}
//Displays all the weather stuff
function displayForecast() {
  var mainForcastDIV = document.querySelector("#main-forecast");
  var weatherIconElement = document.createElement("img");
  var cityNameElement = document.createElement("h1");
  var dateElement = new Date().toISOString().slice(0, 10);document.createElement("h2");
  var tempElement = document.createElement("p");
  var humidElement = document.createElement("p");
  var windElement = document.createElement("p");
  var uvElement = document.createElement("p");
  cityNameElement.innerText = `${searchArr.name}`;
  tempElement.innerText =
    "Temperature: " + `${searchArr.main.temp}` + "° Farenheit";
  humidElement.innerText = "Humidity: " + `${searchArr.main.humidity}` + "%";
  windElement.innerText =
    "Wind Speed: " + `${searchArr.wind.speed}` + " miles/hour";
  uvElement.innerText = "UV Index: " + `${searchArrTwo.current.uvi}`;
  mainForcastDIV.append(
    cityNameElement,
    dateElement,
    tempElement,
    humidElement,
    windElement,
    uvElement
  );
}
//Save search history
function saveText() {
  sessionStorage.setItem("texts", JSON.stringify(cityArr));
}
function loadHistory() {
  searchArr.forEach(function (index) {
    
  });
}
function loadHistory() {
  cityArr.forEach(function (index) { });
  var savedTexts = sessionStorage.getItem('texts');
if(!savedTexts) {
        return false;
    }

    savedTexts = JSON.parse(savedTexts);
    console.log(savedTexts, "this is savedTexts");
    textArr = savedTexts;
    loadStorageTexts();
}