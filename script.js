// declared function collectioninfo to fetch information from API key
function collectInfo(){
  var newList = document.getElementById("movie-search");
  console.log(newList);
  var movieTitle = document.getElementById("movie-input");
  console.log(movieTitle);
  var genreSel = document.getElementById("selection");
  console.log(genreSel);
}
// using fetch method to retrieve data from Api and giving condition to work on
fetch('https://api.themoviedb.org/3/movie/550?api_key=cb0a27fc2effad207407997a55dc7c30')
.then((response) => response.json())
.then((data) => console.log(data));


fetch('http://www.omdbapi.com/?i=tt3896198&apikey=4fca7de8')
.then((response) => response.json())
.then((data) => console.log(data));

// for(i=0; i<5; i++){
  //     document.getElementById("day" + (i+1) + "Min").innerHTML = "Min:" + Number(data.list[i].main.temp_min-293.2).toFixed(2)+ "°";
  // }
  // for(i=0; i<5; i++){
    //     document.getElementById("day" + (i+1) + "Max").innerHTML = "Max:" + Number(data.list[i].main.temp_max-293.2).toFixed(2)+ "°";
    // }
collectInfo();


     
      
      
      