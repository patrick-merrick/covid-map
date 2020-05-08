
// These variables will be inputs from the user
let county = "King";
let state = "WA"
let dateToday = "2020-05-03";
let timeframe = 14;

// These variable will need to come from API objects

let totalDeaths = 461;
let totalCases = totalDeaths / .01; //SUSPECTED Total Cases

// Calculator Variables: these will not be in use at this time, will use later after refining our code
let newCases = 0;
let newDeaths = 0;
let deathsPerDay = new Array(timeframe); //

//API Call
let queryURL = "https://data.cdc.gov/resource/kn79-hsxy.json?county_name="+ county + " County&&state_name=" + state;//+ "&apikey=80bn0yu4eqop2i4gti4bnvutc";

displayInfo();

function displayInfo() {
  $.ajax({
    url: queryURL,
    data: {
      "$limit" : 5000,
      "$$app_token" : "tcQpdoXhl4dweExV6fmGI2Wyc"
    },
    method: "GET"

  }).then(function(response) {
    console.log(response[0].county_name);
    console.log(response);
    totalDeaths = response[0].covid_death;
    totalCases = response[0].covid_death;



  });

}

  
