/// need to finish the changes to the tables 
var path = require("path");
var gdp = require("../models/models.js");

module.exports = function (app) {



  app.get("/api/map", function (req, res) {
    var query = req.body;
    res.sendFile(path.join(__dirname, "../public/js/map.json"));

  });

  "/api/:categ"
  app.get("/submit", function (req, res) {
    gdp.findAll({

      attributes: ['code', 'gdpIdx'],
      where: { year: 2004 }
    }
    ).then(function (mapData) {
      var Data = {
        "took": 492,
        "timed_out": false,
        "_shards": {
          "total": 5,
          "successful": 3,
          "failed": 0
        },
        "hits": {
          "total": 30111166,
          "max_score": 0,
          "hits": []
        },
        "aggregations": {
          "world_map": {
            "doc_count_error_upper_bound": 0,
            "sum_other_doc_count": 0,
            "buckets": []
          }
        }
      };

      mapData.forEach(function (gdp) {

        var countryInfo = {
          "key": gdp.dataValues.code,
          "doc_count": gdp.dataValues.gdpIdx
        }
        Data.aggregations.world_map.buckets.push(countryInfo);
      });
      res.send(JSON.stringify(Data));

      console.log(Data);
    });
  });

  // app.post("/post", function (req, res) {
  //   gdp.create({
  //     country: "Africa",
  //     code: "dfd",
  //     year: 2004,
  //     gdpIdx: 2323232
  //   });
  // });



  // app.get("/api/:category/:year", function(req, res) {
  //  var category = req.params.category;
  //  var year = req.params.category

  //  db.category.findOne({
  //     where: {
  //       year: year
  //     }
  //   }).then(function(mapData) {
  //     globalMapData = mapData;
  //   });
  // });

}
