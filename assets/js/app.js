const WEATHERKEY = config.WEATHERKEY;
const MOVIEKEY = config.MOVEIEKEY;

function getApi() {
  // fetch request gets a list of all the repos for the node.js organization
  var requestUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${MOVIEKEY}&language=en-US`;
  var requestUrl2 = `https://api.openweathermap.org/data/2.5/weather?q=   add City name   &appid=${WEATHERKEY}`; //liza this is the api key for the weather api

  // fetch to make an HTTP API request using JS
  // fetch takes 2 param
  // 1 is the url we want to make the request to
  // 2 is a configuration object
  // this code is "asynchronous" meaning its going to take some time to complete

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      //Loop over the data to generate a table, each table row will have a link to the repo url
    });
}

var $searchBtn = $("#searchButton");
var $textInput = $("#cityInput");
var $searchCard = $("#search");
var $weatherCard = $("#weather-card");
var $movieCard = $("#movie-card");

var $loadingEl = $('h2');
$loadingEl.text('Looking for the weather in your area...');

var $newSearchBtn = $("#newSearchButton");

// Hide cards initially
$weatherCard.hide();
$movieCard.hide();

// When search button is clicked
$searchBtn.on('click', function (event) {

  var location = $textInput.val();

  $searchCard.hide();
  loadingScreen();

});

$newSearchBtn.on('click', function (event) {

  $weatherCard.hide();
  $movieCard.hide();
  $searchCard.show();

});

// Function for the loading screen
function loadingScreen() {

  $loadingEl.show();

  // Timer function
  var timer1 = 3;
  var timer2 = 3;
  var timerInterval1 = setInterval(function () {
    timer1--;

    if (timer1 <= 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval1);
      timer2 = 3;
      $loadingEl.text('Calculating the best movie for you...');
      var timerInterval2 = setInterval(function () {
        timer2--;
    
        if (timer2 <= 0) {
          // Stops execution of action at set interval
          clearInterval(timerInterval2);
          $loadingEl.hide();
          $weatherCard.show();
          $movieCard.show();
          return;
        }
      }, 1000);
    }
  }, 1000);
};
