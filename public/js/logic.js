var keyword = "";
var startDate = "";
var endDate = "";

var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
    'api-key': "1fb146a3913f44919d26b45822fa57ae",
    'q': keyword,
    'begin_date': startDate + "0101",
    'end_date': endDate + "1231"
});
$.ajax({
    url: url,
    method: 'GET',
}).done(function (result) {
    console.log(result);
}).fail(function (err) {
    throw err;
});