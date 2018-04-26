/// need to finish the changes to the tables 

var db = require("../models");

module.exports = function(app) {
  app.get("/api/:country", function(req, res) {
    db.Country.findAll({}).then(function(dbCountry) {
      res.json(dbCountry);
    });
  });

  app.get("/api/:category", function(req, res) {
    db.Category.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbAuthor) {
      res.json(dbAuthor);
    });
  });

  app.get("/api/:", function(req, res) {
    db.Author.create(req.body).then(function(dbAuthor) {
      res.json(dbAuthor);
    });
  });

  app.delete("/api/", function(req, res) {
    db.Author.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbAuthor) {
      res.json(dbAuthor);
    });
  });

};
