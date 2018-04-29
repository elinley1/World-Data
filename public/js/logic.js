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
      let docs = result.response.docs
      console.log(docs)
        updateArticles(docs);
      return result;

    }).fail(function(err) {
      throw err;
    });
};

/**
 * takes API data (JSON/object) and turns it into elements on the page
 */
function updateArticles(docs) {
    var numberArticles = 10;
    $('#articles').html("")
    for (var i = 0; i < docs.length; i++) {
        console.log("repeating");
        var article = docs[i];
        var articleCount = i + 1;

        var $articleSelection = $("<article>");
        $articleSelection.addClass("selection");
        $articleSelection.attr("id", "article-selection-" + articleCount);

        $("#articles").append($articleSelection);

        var headline = article.headline.main;
        if (headline) {
            $articleSelection.append("<h5>" + headline + "</h5>");
        }

        var publishDate = article.pub_date;
        if (publishDate) {
            $articleSelection.append("<h5>Publication Date: " + publishDate + "</h5>");
        }

        var byline = article.byline && article.byline.person ? article.byline.person
            .map(function(person) {
            return person.firstname + " " + person.lastname;
        }).join(", ") : false;
        if (byline) {
            $articleSelection.append("<h5>" + byline + "</h5>");
        }

        var section = article.section_name;
        if (section) {
            $articleSelection.append("<h5>Section: " + section + "</h5>");
        }

        var website = article.web_url;
        if (website) {
            $articleSelection.append("<a href= " + website + "a>" + website + "</a>")
        }
    }
};

$("#submit-button").on("click", function(event) {
    console.log("button clicked");
    event.preventDefault();

    //get country
    //get year
    //make AJAX request
    //in .then handler, call updateArticles w/ response data

    // renderDescription();
    updateArticles();


})