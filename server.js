var express = require('express');
var app = express();
//build googlesearch
var GoogleSearch = require('google-search');
var googleSearch = new GoogleSearch({
  key: process.env.GOOGLE_API_KEY,
  cx: process.env.GOOGLE_CX
});

googleSearch.build({
  q: "cat and deer",
  start: 0,
  fileType: "jpg",
  num: 10, // Number of search results to return between 1 and 10, inclusive 
  
}, function(error, response) {
  if (error){
    console.log("Request Error: " + error);
  }
  console.log(response);

})

app.use(express.static('public'));


app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});


var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
