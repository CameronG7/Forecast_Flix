const WEATHERKEY = config.WEATHERKEY;
const MOVIEKEY = config.MOVIEKEY;
//placeholder for searchbtn dnu
// let searchBtn = $("#searchButton");
// searchBtn.on("click", function (event) { // second search onclick
// 	 //need this
// 	fetchWeather(); //need this
// });

var $searchBtn = $("#searchButton");
var $textInput = $("#cityInput");
var $searchCard = $("#search");
var $weatherCard = $("#weather-card");
var $movieCard = $("#movie-card");
var $modalBtn1 = $('#modalBtn');

var $loadingEl = $("h2");
var $newSearchBtn = $("#newSearchButton");
var locationVal = ""
let movieList = [];
let cityIcon = null
let apiCheck = true

$(document).keypress(function (event) {
	var keycode = event.keyCode || event.which;

	if (keycode == "13") {
		event.preventDefault();
		locationVal = $textInput.val();

		if (locationVal === "") 
		{
			$modalBtn1.click();
			return;
		}
		getMovie();
		setTimeout(function () {
			if (apiCheck === true) 
			{
				storeToLocalStorage(locationVal);
				$searchCard.hide();
				console.log("this went through click");
				loadingScreen();
			}
			if (apiCheck == false) 
			{
				apiCheck = true;
				$modalBtn1.click();
				return;
			}
		}, 500);
	}
	
});

$searchBtn.on("click", function (event) {
	locationVal = $textInput.val();

	if (locationVal === "") {
		$modalBtn1.click();
		return;
	}
	getMovie();
	setTimeout(function () {

	if (apiCheck === true) { 
		storeToLocalStorage(locationVal);
		$searchCard.hide();
		console.log("this went through click");
		loadingScreen();
	}
	if (apiCheck== false) {
		apiCheck = true;
		$modalBtn1.click();
		return;
	}	
	},500)
	 
	
	
});

function storeToLocalStorage(location) {
	new_data = location;
	if (localStorage.getItem("data") == null) {
	  localStorage.setItem("data", "[]");
	}
	old_data = JSON.parse(localStorage.getItem("data"));
	old_data.push(new_data);
	localStorage.setItem("data", JSON.stringify(old_data));
  
  }
  
  var searchHis = $("#history");
  
  var recentSearch = JSON.parse(localStorage.getItem("data")) || [];
  if (recentSearch !== null) {
	for (var i = 0; i < recentSearch.length; i++) {
	  var buttonEl = $("<li>");
	  buttonEl.text(`${recentSearch[i]}`);
	  searchHis.prepend(buttonEl);
	  console.log(recentSearch[0]);
	}
  }

function fetchWeather() { //start Liza

	var newCity = $("#cityInput").val();
	//this will be var location
	var requestUrl2 = `https://api.openweathermap.org/data/2.5/weather?q=${newCity}&appid=${WEATHERKEY}&units=imperial`;
	console.log(newCity); // sanity check
	fetch(requestUrl2)
		.then(function (response) {
			if (response.status !== 200) 
			{
				apiCheck = false; 
				$modalBtn1.click();
				return 
			}
			else{
				return response.json();
			}
			
		})
		.then(function (data) {
			
			
			cityName = data.name;
			let nameChange = $("#cityWeather"); // need more specific selector,, this changes the ttile of all the cards
			nameChange.text(cityName);
			des = data.weather[0].description;
			console.log(des);
			let description = $("#weather-description");
			description.text(des);
			cityTemp = data.main.temp;
			let temp = $("#temperature");
			temp.text(cityTemp);
			cityIcon = data.weather[0].icon;
			let iconImg = $("#weather-card").children().children().eq(0); //fix for icons
			console.log(iconImg);
			iconImg.attr(
				"src",
				"https://openweathermap.org/img/wn/" + cityIcon + ".png"
			);
			console.log(cityIcon);
      return cityIcon;
		}).catch((error) => {
			console.log("weather not found");
			console.log(error)
			return Promise.reject() ;
		});
}
//end Liza

//start Marcus

$loadingEl.text("Looking for the weather in your area...");



// Hide cards initially
$weatherCard.hide();
$movieCard.hide();





// When search button is clicked


$newSearchBtn.on('click', function (event) {
event.preventDefault();
locationVal = "";

  $weatherCard.hide();
  $movieCard.hide();
  $searchCard.show();
  location.reload();

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
			$loadingEl.text("Calculating the best movie for you...");
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
}
//end marcus 

//start Cameron
const weatherIconList = [
	"01d","01n", //clear
	 "02d","02n", // few clouds
    "03d","03n", // scattered clouds
	   "04d","04n", // broken clouds
	    "09d","09n", // showers
	     "10d","10n", // rain
	      "11d","11n", // thunder
	       "13d","13n", // snow
	        "50d","50n", // weird conditions
];

				const movieTitleEl = $('#movieTitle')
				const movieTagEL = $('#movieTag');
				const ratingEL = $('#rating');

function getMovie() {
fetchWeather()

	setTimeout(function () {
		if (apiCheck === false) {
			return;
		}
		movieList = [];
		let weather_conditions = cityIcon;
		if (weather_conditions === null) {
			return;
		}
   console.log( weather_conditions);
		// when i get a weather condition
		// i choose appropriate genres to match
		// with those genres i choose movies to grab
		// then i display the movie information ( picture, tagline , rating and category)
    let genre ={}
		if (weather_conditions === "01d" || weather_conditions === "01n") { // only first weather condition works FIX
			//comedy
      console.log("the weather condition worked");
			genre = {
				id1: 14,
				id2: null,
			};
		} else if (weather_conditions === "02d" || weather_conditions === "02n") {
			//action adventure
			genre = {
				id1: 28,
				id2: 12,
			};

		} else if (weather_conditions === "03d" ||  weather_conditions ==="03n") {

			//mystery
			genre = {
				id1: 9648,
				id2: null,
			};
		} else if (weather_conditions === "04d" || weather_conditions === "04n") {
			//scifi
			console.log("scifi")
			genre = {
				id1: 878,
				id2: null,
				id2: null,
			};
		} else if (weather_conditions === "09d" || weather_conditions === "09n") {
			//drama thriller
			genre = {
				id1: 18,
				id2: 53,
			};
		} else if (weather_conditions === "10d" || weather_conditions === "10n") {
			//documentary
			genre = {
				id1: 99,
				id2: null,
			};

		} else if (weather_conditions === "11d" ||  weather_conditions === "11n") {

			//crime
			genre = {
				id1: 80,
				id2: null,
			};

		} else if (weather_conditions === "13d" ||  weather_conditions === "13n") {

			//family animation
			genre = {
				id1: 10751,
				id2: 16,
			};
		} else if (weather_conditions === "50d" || weather_conditions === "50n") {
			genre = {
				id1: 35,
				id2: 10749,
			};
		}

		var movieUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${MOVIEKEY}&language=en-US&region=US&
                    sort_by=vote_count.desc&include_adult=false&include_video=false&page=1&vote_count.gte=1000&
                    vote_average.gte=8&with_genres=${genre.id1},${genre.id2}&with_original_language=en&watch_region=US&
                    with_watch_monetization_types=flatrate`;


    console.log(movieUrl);

		fetch(movieUrl)
			.then(function (response) 
			{
				return response.json();
			})
			.then(function (data) 
			{
			console.log(data.results);
				// const movieTitleEl = $('#movieTitle')
				// const movieTagEL = $('#movieTag');
				// const releaseEL = $('#release');
				
				for(let i =0; i < 5; i++) 
				{
				let newMovie = 
				{
					"title": data.results[i].title, 
					"tagline": data.results[i].overview,
						"rating": data.results[i].vote_average,
				}
				movieList.push(newMovie)
				}
				console.log(movieList);
				movieTitleEl.text(movieList[0].title)
				movieTagEL.text(movieList[0].tagline)
				ratingEL.text(`Rating ${movieList[0].rating}`)


			});
			}, 1000);
} // end of movie

let $nextMovie = $('#nextMovie');
let movieCount = 1
$nextMovie.on('click',function (e) {
	
		movieTitleEl.text(movieList[movieCount].title)
		movieTagEL.text(movieList[movieCount].tagline)
		ratingEL.text(`Rating ${movieList[movieCount].rating}`)
		movieCount++;
		if (movieCount == 5){
			movieCount = 0
		}

})