function getApi() {
    // fetch request gets a list of all the repos for the node.js organization
    var requestUrl = 'https://api.themoviedb.org/3/genre/movie/list?api_key=070b18d2b6b4f6fd43d39385a2c35cb9&language=en-US';
fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)
    });
}