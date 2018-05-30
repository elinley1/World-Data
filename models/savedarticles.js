var Sequelize = require("sequelize");

var sequelize = require("../config/connection.js");

var SavedArticles = sequelize.define("savedArticles", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING
 
    },
    date: {
        type: Sequelize.STRING
 
    },
    section: {
        type: Sequelize.STRING
   
    },
    link: {
        type: Sequelize.STRING
   
    }
  
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });
    
try {
    SavedArticles.sync();


} catch (e) {
    console.log(e);
}


module.exports = SavedArticles;


