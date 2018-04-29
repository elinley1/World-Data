function loadNewsAPI(country, year) {
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param({
      'api-key': "1fb146a3913f44919d26b45822fa57ae",
      'q': country,
      'begin_date': year + "0101",
      'end_date': year + "1231"
    });

    $.ajax({
      url: url,
      method: 'GET',
    }).done(function(result) {
      console.log(result);
      console.log("working");
    }).fail(function(err) {
      throw err;
    });
};

/**
 * takes API data (JSON/object) and turns it into elements on the page
 * @param {object} NYTData - object containing NYT API data
 */
function updateArticles(NYTData) {
    var numberArticles = 10;
    for (var i = 0; i < numberArticles.length; i++) {
        console.log("repeating");
        var article = NYTData.response.docs[i];
        var articleCount = i + 1;

        var $articleSelection = $("<article>");
        $articleSelection.addClass("selection");
        $articleSelection.attr("id", "article-selection-" + articleCount);

        $("#articles").append($articleSelection);

        var headline = article.headline.main;
        console.log(headline);
        if (headline) {
            $articleSelection.append("<h5>" + headline + "</h5>");
        }

        var publishDate = article.pub_date;
        console.log(publishDate);
        if (publishDate) {
            $articleSelection.append("<h5>Publication Date: " + publishDate + "</h5>");
        }

        var byline = article.byline;
        console.log(byline);
        if (byline) {
            $articleSelection.append("<h5>" + byline + "</h5>");
        }

        var section = article.section_name;
        console.log(section);
        if (section) {
            $articleSelection.append("<h5>Section: " + section + "</h5>");
        }

        var website = article.web_url;
        console.log(website);
        if (website) {
            $articleSelection.append("<a href= " + website + "a>" + website + "</a>")
        }
    }
};

$("#submit-button").on("click", function(event) {
    console.log("button clicked");
    event.preventDefault();

    // renderDescription();
    updateArticles();


})