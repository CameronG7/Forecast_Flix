const WEATHERKEY = config.WEATHERKEY
const MOVIEKEY = config.MOVIEKEY

function getApi() {
  // fetch request gets a list of all the repos for the node.js organization
  var requestUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${MOVIEKEY}&language=en-US`;
  var requestUrl2= `https://api.openweathermap.org/data/2.5/weather?q=   add City name   &appid=${WEATHERKEY}`; //liza this is the api key for the weather api
  
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
      console.log(data)
      //Loop over the data to generate a table, each table row will have a link to the repo url
     
    });
}

const weatherIconList = [
  '01d', '01n', //clear 
   '02d','02n', // few clouds  
    '03d','03n', // scattered clouds 
     '04d','04n', // broken clouds 
      '09d','09n', // showers 
       '10d','10n', // rain 
        '11d','11n', // thunder  
         '13d','13n', // snow 
          '50d','50n', // weird conditions 
]

function getMovie() {
  let weather_conditions = '01d'
  // when i get a weather condition
  // i choose appropriate genres to match
  // with those genres i choose movies to grab
  // then i display the movie information ( picture, tagline , rating and category)
  if (weather_conditions === ('01d' || '01n')) //comedy
  {
    genre = {
      id1: "",
      id2: "",
    }   
  }else if (weather_conditions === ('02d' || '02n')) //action adventure
  {
    genre = {
      id1: "",
      id2: "",
    }
  }else if(weather_conditions ===('03d' || '03n') )//mystery
  {
    genre = {
      id1: "",
      id2: "",
    }  
  }else if (weather_conditions ===('04d' || '04n') ) //scifi
  {
    genre = {
      id1: "",
      id2: "",
    }
  }else if(weather_conditions === ('09d' || '09n')) //drama thriller
  {
    genre = {
      id1: "",
      id2: "",
    }  
  }else if (weather_conditions ===('10d' || '10n') ) //documentary
  {
    genre = {
      id1: "",
      id2: "",
    }
  }else if(weather_conditions ===('11d' || '11n') ) //horror crime
  {
    genre = {
      id1: "",
      id2: "",
    }  
  }else if (weather_conditions === ('13d' || '13n')) //family animation
  {
    genre = {
      id1: "",
      id2: "",
    }
  }else if(weather_conditions === ('50d' || '50n')) 
  {
    genre = {
      id1: "",
      id2: "",
    }     
  }
  
  
  
  


  var requestUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${MOVIEKEY}&language=en-US&region=US&
                    sort_by=vote_count.desc&include_adult=false&include_video=false&page=1&vote_count.gte=1000&
                    vote_average.gte=8&with_genres=&with_original_language=en&watch_region=US&
                    with_watch_monetization_types=flatrate`;
  

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)
      //Loop over the data to generate a table, each table row will have a link to the repo url
     
    });
}