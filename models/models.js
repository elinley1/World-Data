var Sequelize = require("sequelize");

var sequelize = require("../config/connection.js");

var gdp = sequelize.define("gdp", {
    country: {
        type: Sequelize.STRING
 
    },
    code: {
        type: Sequelize.STRING
   
    },
    year: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    gdpIdx: {
        type: Sequelize.INTEGER
     
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
    gdp.sync();

} catch (e) {
    console.log(e);
};

module.exports = gdp;

