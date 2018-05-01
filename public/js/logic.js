var newsDocs = [];



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
    //   console.log(docs)
        updateArticles(docs);
      return result;

    }).fail(function(err) {
      throw err;
    });
};

//Description of index calculations
function updateDescription() {
    var descSelection = $("#dropdown").val();

    console.log("This: ", descSelection);
    
    if (descSelection === "happiness") {
        $("#description").html("<h5>Description:</h5> Data shows 'happiness scores' published in the World Happiness Report 2017. The underlying source of the happiness scores in the World Happiness Report is the Gallup World Poll—a set of nationally representative surveys undertaken in more than 160 countries in over 140 languages. The main life evaluation question asked in the poll is: 'Please imagine a ladder, with steps numbered from 0 at the bottom to 10 at the top. The top of the ladder represents the best possible life for you and the bottom of the ladder represents the worst possible life for you. On which step of the ladder would you say you personally feel you stand at this time?' (Also known as the 'Cantril Ladder'.)");
   }

   else if (descSelection === "income_inequality") {
       $("#description").html("<h5>Description:</h5> Data displayed demonstrates the level of economic inequality in pre-industrial societies in relation to the levels of prosperity in those same societies. Inequality is measured with the Gini index and prosperity is measured by the gross domestic income per capita, adjusted for price differences to make comparisons in a common currency possible. The Gini index is a measure of statistical dispersion intended to represent the income or wealth distribution of a nation's residents, and is the most commonly used measurement of inequality.")
   }

   else if (descSelection === "internet_usage") {
       $("#description").html("<h5>Description:</h5> Internet usage is calculated as the percent of the population using the internet. Internet users are individuals who have used the Internet (from any location) in the last 3 months. The Internet can be used via a computer, mobile phone, personal digital assistant, games machine, digital TV etc.")
   }

   else if (descSelection === "life_expectancy") {
       $("#description").html("<h5>Description:</h5> Life expectancy is the average number of years a child born now would live if current mortality patterns were to stay the same.");
   }

   else if (descSelection === "gdp") {
       $("#desciption").html("<h5>Description:</h5> Economic prosperity is measured as via growth domestic product (GDP) per capita, the value of all goods and services produced by a country in one year divided by the country’s population. Economic growth is the measure of the change of GDP from one year to the next. This entry shows that the current experience of economic growth is an absolute exception in the very long-run perspective of social history.")
   }
   
   else {
        $("#description").html("<h5>Description:</h5> Please select a category for an indicator.")
   };
};

$(document).ready(function () {
    $("#dropdown").change(function() {
        $("#dropdown option:selected").val();
        updateDescription();
    });    
});

//Update articles based on search criteria 
function updateArticles(docs) {
    newsDocs = docs;
    
    var numberArticles = 10;
    $('#articles').html("")
    for (var i = 0; i < newsDocs.length; i++) {
        console.log("repeating");
        var article = newsDocs[i];
        var articleCount = i + 1;

        var $articleSelection = $("<article>");
        $articleSelection.addClass("selection");
        $articleSelection.append("<button class='btn black saveArticle' id='"+i+"' type='save' name='action'>Save Article</button>");
        $articleSelection.attr("id", "article-selection-" + articleCount);

        $("#articles").append($articleSelection);

        var headline = article.headline.main;
        if (headline) {
            $articleSelection.append("<h5 class='articleHead'>" + headline + "</h5>");
        }

        var publishDate = article.pub_date;
        if (publishDate) {
            $articleSelection.append("<h5 class='pubDate'> Publication Date: " + publishDate + "</h5>");
        }

        var byline = article.byline && article.byline.person ? article.byline.person
            .map(function(person) {
            return person.firstname + " " + person.lastname;
        }).join(", ") : false;
        if (byline) {
            $articleSelection.append("<h5>Writer: " + byline + "</h5>");
        }

        var section = article.section_name;
        if (section) {
            $articleSelection.append("<h5>Section: " + section + "</h5>");
        }

        var website = article.web_url;
        if (website) {
            $articleSelection.append("<a href= '" + website + "' class='website'>" + website + "</a>")
        }
    }



        $(document).on("click", ".saveArticle", function() {
            event.preventDefault();
            var article = newsDocs[Number($(this).attr("id"))]; 
            
            var data = {
                 headline : article.headline.main,
                 publishDate : article.pub_date,
                 section : article.section_name,
                 website : article.web_url
            }
            console.log(data);
          
            $.ajax({
                url: "/api/savearticle",
                method: "POST",
                data: data
            });

        });
    
        
};

