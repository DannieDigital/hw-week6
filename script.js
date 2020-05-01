// User input fuction to search weather 
$("#find-weather").on("click", function(event) {
  event.preventDefault();
  var weather = $("#weatherInput").val();
  console.log(weather);
  var APIKey = "&appid=166a433c57516f51dfab1f7edaed8413";


// Here we are building the URL we need to query the database
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" +
weather + APIKey;

// Here we run our AJAX call to the OpenWeatherMap API
$.ajax({
  url: queryURL,
  method: "GET"
})
  // We store all of the retrieved data inside of an object called "data"
  .then(function(data) {

    // Log the queryURL
    console.log(queryURL);

    // Log the resulting object
    console.log(data);

    // Transfer content to HTML
    $(".city").html("<h1>" + data.name + " Current Weather</h1>");
    $(".wind").text("Wind Speed: " + data.wind.speed);
    $(".humidity").text("Humidity: " + data.main.humidity);
    
    // Convert the temp to fahrenheit
    var tempF = (data.main.temp - 273.15) * 1.80 + 32;

    // add temp content to html
    $(".temp").text("Temperature (K) " + data.main.temp);
    $(".tempF").text("Temperature (F) " + tempF.toFixed(2));

    // Log the data in the console as well
    console.log("Wind Speed: " + data.wind.speed);
    console.log("Humidity: " + data.main.humidity);
    console.log("Temperature (F): " + tempF);

    

  });
});


$("#find-weather").on("click", function(event) {
  event.preventDefault();
  var weather = $("#weatherInput").val();
  console.log(weather);
  var APIKey = "&appid=166a433c57516f51dfab1f7edaed8413";

  // Here we are building the URL we need to query the database
var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" +
weather + APIKey;


// Here we run our AJAX call to the OpenWeatherMap API
$.ajax({
  url: queryURL,
  method: "GET",

})


.then(function(five) {

  // Log the resulting object
    console.log(five);

    // Transfer content to HTML
    $(".forecastCity").html("<h2>" + five.city.name + ", " + "  " + five.city.country + " Five Day Forecast</h2>");
    $(".forecastDay").text("Date & Time: " + five.list[0].dt_txt);
    $(".forecastWind").text("Wind Speed: " + five.list[0].wind.speed);
    $(".forecastHumidity").text("Humidity: " + five.list[0].main.humidity);

     // Convert the temp to fahrenheit
     var tempF = (five.list[0].main.temp - 273.15) * 1.80 + 32;

     // add temp content to html
     $(".forecastTemp").text("Temperature (K) " + five.list[0].main.temp);
     $(".forecastTempF").text("Temperature (F) " + tempF.toFixed(2));


       // Day Two  Transfer content to HTML
    $(".fiveDayOneCity").html("<h2>" + five.city.name + ", " + "  " + five.city.country + " Five Day Forecast</h2>");
    $(".fiveDayOnetDay").text("Date & Time: " + five.list[8].dt_txt);
    $(".fiveDayOneWind").text("Wind Speed: " + five.list[8].wind.speed);
    $(".fiveDayOneHumidity").text("Humidity: " + five.list[8].main.humidity);

     // Convert the temp to fahrenheit
     var tempF = (five.list[8].main.temp - 273.15) * 1.80 + 32;

     // add temp content to html
     $(".fiveDayOneTemp").text("Temperature (K) " + five.list[8].main.temp);
     $(".fiveDayOneTempF").text("Temperature (F) " + tempF.toFixed(2));

      // Day Three  Transfer content to HTML
    $(".fiveDayTwoCity").html("<h2>" + five.city.name + ", " + "  " + five.city.country +  " Five Day Forecast</h2>");
    $(".fiveDayTwoDay").text("Date & Time: " + five.list[16].dt_txt);
    $(".fiveDayTwoWind").text("Wind Speed: " + five.list[16].wind.speed);
    $(".fiveDayTwoHumidity").text("Humidity: " + five.list[16].main.humidity);

     // Convert the temp to fahrenheit
     var tempF = (five.list[16].main.temp - 273.15) * 1.80 + 32;

     // add temp content to html
     $(".fiveDayTwoTemp").text("Temperature (K) " + five.list[32].main.temp);
     $(".fiveDayTwoTempF").text("Temperature (F) " + tempF.toFixed(2));


     // Day Four  Transfer content to HTML
    $(".fiveDayThreeCity").html("<h2>" + five.city.name + ", " + "  " + five.city.country +  " Five Day Forecast</h2>");
    $(".fiveDayThreeDay").text("Date & Time: " + five.list[24].dt_txt);
    $(".fiveDayThreeWind").text("Wind Speed: " + five.list[24].wind.speed);
    $(".fiveDayThreeHumidity").text("Humidity: " + five.list[24].main.humidity);

     // Convert the temp to fahrenheit
     var tempF = (five.list[24].main.temp - 273.15) * 1.80 + 32;

     // add temp content to html
     $(".fiveDayThreeTemp").text("Temperature (K) " + five.list[24].main.temp);
     $(".fiveDayThreeTempF").text("Temperature (F) " + tempF.toFixed(2));

      // Day Five Transfer content to HTML
    $(".fiveDayFourCity").html("<h2>" + five.city.name + ", " + "  " + five.city.country +  " Five Day Forecast</h2>");
    $(".fiveDayFourDay").text("Date & Time: " + five.list[32].dt_txt);
    $(".fiveDayFourWind").text("Wind Speed: " + five.list[32].wind.speed);
    $(".fiveDayFourHumidity").text("Humidity: " + five.list[32].main.humidity);

     // Convert the temp to fahrenheit
     var tempF = (five.list[32].main.temp - 273.15) * 1.80 + 32;

     // add temp content to html
     $(".fiveDayFourTemp").text("Temperature (K) " + five.list[32].main.temp);
     $(".fiveDayFourTempF").text("Temperature (F) " + tempF.toFixed(2));

    // Log the five in the console as well
    console.log("Wind Speed: " + five.wind.speed);
    console.log("Humidity: " + five.main.humidity);
    console.log("Temperature (F): " + tempF);

    
    

});

});

$("#find-weather").on("click", function(event) {
  event.preventDefault();
  var weather = $("#weatherInput").val();
  console.log(weather)

$(function(data) {
  // Create a new table row element
  var tRow = $("<tr>");

  // Methods run on jQuery selectors return the selector they we run on
  // This is why we can create and save a reference to a td in the same statement we update its text
  var cityTd = $("<td>").text(weather);
  
    
  // Append the newly created table data to the table row
  tRow.append(cityTd);
  // Append the table row to the table body
  $("tbody").append(tRow);
});
});




