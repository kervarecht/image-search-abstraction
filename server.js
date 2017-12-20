var express = require('express');
var app = express();
var url = require('url');
var customSearch = require("./customsearch")


app.use(express.static('public'));


app.get("/", function (req, res) {
  
  var params = querySplitter(url.parse(req.url).query);
  console.log(params);
  var search = params[0].query;
  var offset = Number(params[1].query);
  
  if (offset === null || offset.isNaN === true){
    offset = 0;
  }
  
  var response = customSearch(search, offset, function(data){
    var answer = [];
    for (var i = 0; i < data.length; i++){
      var imageInfo = {
        "pageURL" : data[i].image.contextLink,
        "URL": data[i].link,
        "alt": data[i].title
      }
      answer.push(imageInfo);
    }
    res.send(answer);

  });
  
  
});


var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

var querySplitter = function(string){
  string = string.split("&");
  var returnObj = [];
  
  for (var i = 0; i < string.length; i++){
    string[i] = string[i].split("=");
    returnObj[i] = {
      "parameter": string[i][0],
      "query": string[i][1]
    }
  }
  
  return returnObj
}