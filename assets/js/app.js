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
