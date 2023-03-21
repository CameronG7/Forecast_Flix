const WEATHERKEY = config.WEATHERKEY
const MOVIEKEY = config.MOVEIEKEY

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