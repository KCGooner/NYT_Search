// variables user input
var term = $(".searchTerm");

var recordCount = $(".retrieve");

var startYear = $(".startYear");

var endYear = $(".endYear");


function nytSearch(term) {

    var apiKey = "XIVhAvjVrJYaaW5HjYX599QmZTV3SUcG";
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + term + "&api-key=" + apiKey; 

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
    });
};