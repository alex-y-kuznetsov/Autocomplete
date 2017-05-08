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
  var a = new RegExp("^" + autocompleteCity.value, "i");
  for(var x = 0, b = document.createDocumentFragment(), c = false; x < cities.length; x++) {
    if(a.test(cities[x].City)) {
      c = true;
      var d = document.createElement("p");
      d.innerText = cities[x].City;
      d.setAttribute("onclick", "autocompleteCity.value=this.innerText;resultCity.innerHTML='';resultCity.style.display='none';");
      b.appendChild(d);
    }
  }
  if(c === true) {
    resultCity.innerHTML = "";
    resultCity.style.display = "block";
    resultCity.appendChild(b);
    return;
  }
  toggleResultCity();
}

close

//Listeners
autocompleteCity.addEventListener("keyup", updateResults);
autocompleteCity.addEventListener("change", updateResults);
autocompleteCity.addEventListener("focus", updateResults);
autocompleteCity.addEventListener("keyup", function(e){
  e.keyCode == ESCAPE_KEY_CODE && (resultCity.style.display = "none")
}, false);
