//        // declared function collectioninfo to fetch information from API key
var newList = document.getElementById("movie-search");
var example = document.getElementById("example-title");
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
   console.log(data.results[0].title);
   
   example.textContent = data.results[0].title;
   var movieid = data.results[0].poster_path;
   console.log(movieid);
   var image = document.getElementById("example-image");
  image.src ="https://image.tmdb.org/t/p/w185/"+ data.results[0].poster_path;
  var image2 = document.getElementById("im2");
  var image3 = document.getElementById("im3");
  image2.src = "https://image.tmdb.org/t/p/w185" + data.results[1].poster_path;
  image3.src = "https://image.tmdb.org/t/p/w185" + data.results[2].poster_path;
  fetch('http://www.omdbapi.com/?t='+movieTitle+'&apikey=4fca7de8')
  .then((response) => response.json())
  .then((data) => console.log(data));

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
// .then((data) => console.log(data)):