const WEATHERKEY = config.WEATHERKEY
const MOVIEKEY = config.MOVEIEKEY
//placeholder for searchbtn dnu
let searchBtn = $('#searchButton');
searchBtn.on('click', function (event) {
  event.preventDefault();//need this
  fetchWeather();//need this
})
function fetchWeather(){
  var key = '0d556524fc925415c387efcd51d5b68a';//cameron it didnt workvar searchedName = data.city.name;
  var newCity = $('#cityInput').val();
  //this will be var location
  var requestUrl2= `https://api.openweathermap.org/data/2.5/weather?q=${newCity}&appid=`+ key + '&units=imperial';
  console.log(newCity); // sanity check
  fetch(requestUrl2)

    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)
       cityName = data.name
      let nameChange=$('.card-title')
      nameChange.text(cityName)
      des = data.weather[0].description
      console.log(des)
      let description = $('#weather-description')
       description.text(des)
      cityTemp = data.main.temp
      let temp = $('#temperature')
      temp.text(cityTemp)
      cityIcon = data.weather[0].icon
      let iconImg = $('.card')
      iconImg.attr = ('img src','https://openweathermap.org/img/wn/'+cityIcon+'.png')
      console.log(iconImg);
    
    })
  };

 
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
  

 


 
