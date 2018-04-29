/// need to finish the changes to the tables 
var path = require("path");
var gdp = require("../models/models.js");

module.exports = function (app) {

  // var globalMapData = {};

  app.get("/api/map", function (req, res) {
    var query = req.body;
    res.sendFile(path.join(__dirname, "../public/js/map.json"));
    //  res.json(globalMapData);
  });

  app.get("/test", function (req, res) {
    gdp.findAll({

      attributes: ['code', 'gdpIdx'],
      where: { year: 2004 }
    }
    ).then(function (mapData) {
      mapData.forEach(function(gdp){
        var buckets = [];
        var countryInfo= {
        "key": gdp.dataValues.code,
        "doc_count": gdp.dataValues.gdpIdx
      }
      buckets.push(countryInfo);
      });
    });
  });

  app.post("/post", function (req, res) {
    gdp.create({
      country: "Africa",
      code: "dfd",
      year: 2004,
      gdpIdx: 2323232
    });
  });



  // app.get("/api/:category/:year", function(req, res) {
  //  var category = req.params.category;
  //  var year = req.params.category;

  //  db.category.findOne({
  //     where: {
  //       year: year
  //     }
  //   }).then(function(mapData) {
  //     globalMapData = mapData;
  //   });
  // });

}
