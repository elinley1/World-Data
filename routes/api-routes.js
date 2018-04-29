/// need to finish the changes to the tables 
var path = require("path");
var gdp = require("../models/models.js");

module.exports = function(app) {

// var globalMapData = {};

  app.get("/api/map", function(req, res) {
    var query = req.body;
   res.sendFile(path.join(__dirname,"../public/js/map.json"));
  //  res.json(globalMapData);
  });

  app.get("/test", function(req, res) {
    console.log("GDP:" + gdp);
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



};
