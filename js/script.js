'use strict';

//Variables
var ESCAPE_KEY_CODE = 27;
var resultCity = document.getElementById("result-city");
var autocompleteCity = document.getElementById("autocomplete-city");
var cities = window.citiesArray;

//Reset results
var toggleResultCity = function () {
  resultCity.innerHTML = "";
  resultCity.style.display = "none";
}

//Get results
var updateResults = function () {
  if (!autocompleteCity.value) {
    toggleResultCity();
    return;
  }
  var citySearcher = new RegExp("^" + autocompleteCity.value, "i");
  for(var x = 0, cityItem = document.createDocumentFragment(), cityChecker = false; x < cities.length; x++) {
    if(citySearcher.test(cities[x].City)) {
      cityChecker = true;
      var cityName = document.createElement("p");
      cityName.innerText = cities[x].City;
      cityName.setAttribute("onclick", "autocompleteCity.value=this.innerText;resultCity.innerHTML='';resultCity.style.display='none';");
      cityItem.appendChild(cityName);
    }
  }
  if(cityChecker === true) {
    resultCity.innerHTML = "";
    resultCity.style.display = "block";
    resultCity.appendChild(cityItem);
    return;
  } else {
    resultCity.innerText = "Не найдено";
    resultCity.style.display = "block";
    return;
  }
  toggleResultCity();
}

//Listeners
autocompleteCity.addEventListener("keyup", updateResults);
autocompleteCity.addEventListener("change", updateResults);
autocompleteCity.addEventListener("focus", updateResults);
autocompleteCity.addEventListener("keyup", function(e) {
  e.keyCode == ESCAPE_KEY_CODE && (resultCity.style.display = "none")
});
