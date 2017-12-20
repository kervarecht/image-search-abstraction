var GoogleSearch = require('google-search');

var customSearch = function(query, offset, callback){
  
  
  var googleSearch = new GoogleSearch({
  key: process.env.GOOGLE_API_KEY,
  cx: process.env.GOOGLE_CX
});
  
  googleSearch.build({
  q: query,
  start: offset,
  searchType: "image",
  num: 10, // Number of search results to return between 1 and 10, inclusive 
  
}, function(error, response) {
  if (error){
    return error
  }
    
  callback(response.items);
  

});  
}

module.exports = customSearch;