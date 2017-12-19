var express = require('express');
var app = express();
var url = require('url');
//build googlesearch
var GoogleSearch = require('google-search');
var googleSearch = new GoogleSearch({
  key: process.env.GOOGLE_API_KEY,
  cx: process.env.GOOGLE_CX
});
/*
googleSearch.build({
  q: "cat",
  start: 5,
  searchType: "image",
  num: 10, // Number of search results to return between 1 and 10, inclusive 
  
}, function(error, response) {
  if (error){
    console.log(error);
  }
  console.log(response);

})
*/
app.use(express.static('public'));


app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
  console.log(url.query)
});


var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
