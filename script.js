//        // declared function collectioninfo to fetch information from API key
function collectInfo(){
  var newList = document.getElementById("movie-search");
  var movieTitle = document.getElementById("movie-input");
  var genreSel = document.getElementById("selection");
 }

 document.getElementById("searchBtn").addEventListener("click", collectInfo())
console.log(collectInfo)

       // using fetch method to retrieve data from Api and giving condition to work on
fetch('https://api.themoviedb.org/3/movie/550?api_key=cb0a27fc2effad207407997a55dc7c30')
.then((response) => response.json())
.then(function (data){
  console.log(data);
  var example = document.getElementById("example-title");
  example.textContent = data.title;
  example.textContent = data.title;
  var image = document.getElementById("example-image");
  image.src ='https://image.tmdb.org/t/p/w300_and_h450_bestv2/'+data.poster_path;
})

       // using another fetchmethod to get info
fetch('http://www.omdbapi.com/?i=tt3896198&apikey=4fca7de8')
.then((response) => response.json())
.then((data) => console.log(data));

collectInfo();
  