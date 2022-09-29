fetch("http://www.omdbapi.com/?i=tt3896198&apikey=4fca7de8")
  .then((response) => {
    var resp = response.json();
  })
  .then((resp) => {
    console.log(resp);
  })