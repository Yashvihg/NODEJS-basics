const axios = require("axios");
//use const so that further down the line we dont use the same variabble.
axios
  .get("https://jsonplaceholder.typicode.com/todos")
  .then(function (response) {
    // handle success
    console.log(response); // console.log(response.data.length);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
    console.log("done");
  });

//console.log("Program Ended") // this prints first.
