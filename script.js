// // e46479163adf8296196ce28dcb4704e5
// https://api.openweathermap.org/data/2.5/forecast?q='+ movieRequest.value +'&appid=119916d024c3b4dcfbe2a545cb7be3c4')


// for(i=0; i<5; i++){
  //     document.getElementById("day" + (i+1) + "Min").innerHTML = "Min:" + Number(data.list[i].main.temp_min-293.2).toFixed(2)+ "°";
  // }
  // for(i=0; i<5; i++){
    //     document.getElementById("day" + (i+1) + "Max").innerHTML = "Max:" + Number(data.list[i].main.temp_max-293.2).toFixed(2)+ "°";
    // }
    // // this link is not working below-------------
    // for (var i = 0; i < 5; i++){
      //     document.getElementById("img" + (i+1)).src ="http://openweathermap.org/img/wn/" + data.list[i].weather[0].icon +".png";
      // }
      // declare function collect info
      // fetch('https://api.themoviedb.org/3/movie/550? q=+ movieRequest.value + api_key=e46479163adf8296196ce28dcb4704e5')
      // .then(response => response.json())
      // .then(data =>{
      //   console.log(data);
      // 
      
      
      
      function collectInfo(){
        var newList = document.getElementById("movie-search");
        var movieTitle = document.getElementById("movie-input");
        console.log(movieTitle);
        newList.innerHTML = movieRequest.value;
        console.log(movieRequest.value);
      }
        
        fetch('https://api.themoviedb.org/3/movie/550?q=+ movieRequest.value +api_key=e46479163adf8296196ce28dcb4704e5')
           .then((response) => response.json())
           .then((data) => console.log(data));


           fetch('https://www.omdbapi.com/? q=+ movieRequest.value + i=tt3896198&apikey=4fca7de8')
           .then((response) => response.json())
           .then((data) => console.log(data));
      
      collectInfo();
