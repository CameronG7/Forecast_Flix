function getApi() {
  // fetch request gets a list of all the repos for the node.js organization
  var requestUrl = 'https://api.themoviedb.org/3/genre/movie/list?api_key=070b18d2b6b4f6fd43d39385a2c35cb9&language=en-US';
  var requestUrl2= 'https://api.openweathermap.org/data/2.5/weather?q=Renton&appid=0d556524fc925415c387efcd51d5b68a'; //liza this is the api key for the weather api
  
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