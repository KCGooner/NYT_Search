<<<<<<< HEAD
// variables user input
var term = $(".searchTerm");

var recordCount = $(".retrieve");

var startYear = $(".startYear");
=======
//variables user input
var term = $(".searchTerm");
var recordCount = $(".retrieve");
var startYear = $(".startYear");
var endYear = $(".endYear");
>>>>>>> c3c9386e1de177f44ef2481980d7f6097e1753b7

var endYear = $(".endYear");


function nytSearch(term) {

    var apiKey = "XIVhAvjVrJYaaW5HjYX599QmZTV3SUcG";
<<<<<<< HEAD
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + term + "&api-key=" + apiKey; 

=======
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + term + "&api-key=" + apiKey;
>>>>>>> c3c9386e1de177f44ef2481980d7f6097e1753b7
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
    });
};

//abstarct

//web_url

//begin_date Begin date (e.g. 20120101) yyyymmdd

//end_date End date (e.g. 20121231) yyyymmdd