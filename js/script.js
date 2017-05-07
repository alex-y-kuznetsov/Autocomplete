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

//Get results
var updateResults = function () {
  if (!autocompleteCity.value) {
    toggleResultCity();
    return;
  }
  var a = new RegExp("^" + autocompleteCity.value, "i");
  for(var x = 0, b = document.createDocumentFragment(), c = false; x < cities.length; x++) {
    if(a.test(cities[x])) {
      c = true;
      var d = document.createElement("p");
      d.innerText = cities[x];
      d.setAttribute("onclick", "autocompleteCity.value=this.innerText;resultCity.innerHTML=';resultCity.style.display='none';");
      b.appendChild(d);
    }
  }
  if(c === true) {
    resultCity.innerHTML = '';
    resultCity.style.display = "block";
    resultCity.appendChild(b);
    return;
  }
  toggleResultCity();
}

//Listeners
autocompleteCity.addEventListener("keydown", updateResults);
autocompleteCity.addEventListener("change", updateResults);
autocompleteCity.addEventListener("focus", updateResults);
