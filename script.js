// declared function collectioninfo to fetch information from API key
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
.then((data) => console.log(data));

// using another fetchmethod to get info
fetch('http://www.omdbapi.com/?i=tt3896198&apikey=4fca7de8')
.then((response) => response.json())
.then((data) => console.log(data));
// {
  // for(i = 0; i < fetch.length; i++){
  //       document.getElementById("movieTitle").innerHTML = "Title" +(fetch.list);
  // }
    // for( i= 0; i < 5; i++){
    //       document.getElementById("day" + (i+1) + "Max").innerHTML = "Max:" + Number(data.list[i].main.temp_max-293.2).toFixed(2)+ "°";
    //   }
    //   // this link is not working below-------------
    //   for (var i = 0; i < 5; i++){
    //         document.getElementById("img" + (i+1)).src ="http://openweathermap.org/img/wn/" + data.list[i].weather[0].icon +".png";
    //     }
      // }
    
      
      collectInfo();