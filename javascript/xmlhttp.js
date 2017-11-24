"use strict";

(function () {
  // creates a new object called xhr
  // this will handle the API call
  let xhr = new XMLHtppRequest();
  console.log(`Current readyState: $(xhr.readyState}`);
  
  let queryBox = document.getElementById("weatherQuery");
  let searchForm = document.getElementById("searchForm");
  let demoJSON = document.getElementById("demo");
  
  // construct base for request URL
  let baseURL = "http://api.worldweatheronline.com/premium/v1/weather.ashx? \
  key=6e5bf6c426e3464d831142025172411& \
  q=London,united+kingdom& \
  num_of_days=1&tp=12 \
  &format=JSON"
  
  function gatherData(data) {
    console.log(data);
    // initialise variables
    let theData = "";
    let tempC = "";
    let tempF = "";
    let windspeed = "";
    let humidity = "";
    let pressure = "";
    // loop through results
    for(key in data.query.pages) {
      let tmp = data.query.pages[key];
      if (tmp.
    }
  }
  
  // trigger API call
  searchForm.addEventListener("submit", function(ev) {
    // complete base request url
    //
    // open a connection to the API
    xhr.open("GET", baseURL, true);
    // add a req header
    //xhr.setRequestHeader('Api-User-Agent', 'Example/1.0);
    // send the request
    xhr.send();
    // if response OK, handle data
    xhr.onreadystatechange = function () {
    console.log(`Current readyState: $(xhr.readyState}`);
    if (xhr.readyState === 4 && xhr.status === 200) {
      // parse the JSON
      let response = JSON.parse(xhr.responseText);
      // deal with parsed JSON data
      gatherData(response);
    }
  };
  // clear text box
  queryBox.value = "";
  ev.preventDefault();
}, false);

}());