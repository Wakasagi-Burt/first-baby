//        // declared function collectioninfo to fetch information from API key
var newList = document.getElementById("movie-search");

var genreSel = document.getElementById("selection");
document.getElementById("searchBtn").addEventListener("click", collectInfo);

function collectInfo(event) {
  event.preventDefault();
  var movieTitle = document.getElementById("movie-input").value;

  console.log(movieTitle);
   fetch('https://api.themoviedb.org/3/search/movie?api_key=cb0a27fc2effad207407997a55dc7c30&language=en-US&query='+ movieTitle +"&page=1&include_adult=false")
  .then((response) => response.json())
  .then(function (data) {
   console.log(data.results[0])
    // var example = document.getElementById("example-title");
    // example.textContent = data.title;
    // example.textContent = data.title;
    // var image = document.getElementById("example-image");
    // image.src ='https://image.tmdb.org/t/p/w300_and_h450_bestv2/'+data.poster_path;
})
 }






       // using fetch method to retrieve data from Api and giving condition to work on
// fetch('https://api.themoviedb.org/3/search/movie?api_key=cb0a27fc2effad207407997a55dc7c30&language=en-US&query='+ movieTitle +"&page=1&include_adult=false")
// .then((response) => response.json())
// .then(function (data){
//   console.log(data);
  // var example = document.getElementById("example-title");
  // example.textContent = data.title;
  // example.textContent = data.title;
  // var image = document.getElementById("example-image");
  // image.src ='https://image.tmdb.org/t/p/w300_and_h450_bestv2/'+data.poster_path;
// })

//        // using another fetchmethod to get info
// fetch('http://www.omdbapi.com/?i=tt3896198&apikey=4fca7de8')
// .then((response) => response.json())
// .then((data) => console.log(data));
