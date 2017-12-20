"use strict";

(function () {
  // creates a new object called xhr
  // this will handle the API call
  let xhr = new XMLHttpRequest();
  let searchForm = document.getElementById("searchForm");
  
  // construct base for request URL
  let baseURL = "https://api.worldweatheronline.com/premium/v1/weather.ashx?key=6e5bf6c426e3464d831142025172411&q=Silverstone,UnitedKingdom&num_of_days=1&fx=no&mca=no&format=json";

  function gatherData(data) {
    // Get the data from the API call
    console.log(data.data.current_condition[0]);
  }
  
  // trigger API call
  searchForm.addEventListener("submit", function(ev) {
    // open a connection to the API
    xhr.open("GET", baseURL, true);
    // send the request
    xhr.send();
    // if response OK, handle data
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        // parse the JSON
        let response = JSON.parse(xhr.responseText);
        // deal with parsed JSON data
        gatherData(response);
      }
    };
    // Prevent the page from reloading after making the API call
    ev.preventDefault();

  }, false);
}());
