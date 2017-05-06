'use strict';

//Variables
var resultCity = document.getElementById("result-city");
var autocompleteCity = document.getElementById("autocomplete-city");
var cities = [
  "Екатеринбург",
  "Ирбит",
  "Рейкьявик",
  "Лондон",
  "Бельдяжки",
];

//Reset results
var toggleResultCity = function () {
  resultCity.innerHTML = "";
  resultCity.style.display = "none";
}

var updateResults = function () {
  if (!autocompleteCity.value) {
    toggleResultCity();
    return;
  }
}
