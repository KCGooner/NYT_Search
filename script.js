//variables user input
// var term =
// var recordCount =

// var startYear =

// var endYear =


function nytSearch (term){
    
    var apiKey = "XIVhAvjVrJYaaW5HjYX599QmZTV3SUcG";
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=";
    $.ajax({
        url: queryURL;
        method: "GET"
    }).then(function(response){
        console.log(response);
    });
};