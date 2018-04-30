var Sequelize = require("sequelize");

var sequelize = require("../config/connection.js");



// var Happiness = sequelize.define("happiness", {
//     country: {
//         type: Sequelize.STRING,
//         allowNull: false
//     },
//     code: {
//         type: Sequelize.STRING,
//         allowNull: true
//     },year: {
//         type: Sequelize.DATEONLY,
//         allowNull: false
//     },
//     happinessIdx: {
//         type: Sequelize.FLOAT,
//         allowNull: false
//     }
// }); 

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



// var Gini = sequelize("gini", {
//     country: {
//         type: Sequelize.STRING,
//         allowNull: false
//     },
//     code: {
//         type: Sequelize.STRING,
//         allowNull: true
//     },year: {
//         type: Sequelize.DATEONLY,
//         allowNull: false
//     },
//     giniIdx: {
//         type: Sequelize.FLOAT,
//         allowNull: false
//     }
// });

// var Internet = sequelize("internet", {
//     country: {
//         type: Sequelize.STRING,
//         allowNull: false
//     },
//     code: {
//         type: Sequelize.STRING,
//         allowNull: true
//     },year: {
//         type: Sequelize.DATEONLY,
//         allowNull: false
//     },
//     internetUse: {
//         type: Sequelize.FLOAT,
//         allowNull: false
//     }
// });

// var LifeExp = sequelize("lifeexp", {
//     country: {
//         type: Sequelize.STRING,
//         allowNull: false
//     },
//     code: {
//         type: Sequelize.STRING,
//         allowNull: true
//     },year: {
//         type: Sequelize.DATEONLY,
//         allowNull: false
//     },
//     lifeExp: {
//         type: Sequelize.FLOAT,
//         allowNull: false
//     }
// })



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

// Happiness.sync();
// Gini.sync();
// Internet.sync();
// LifeExp.sync();

} catch (e) {
    console.log(e);
}


// module.exports = Internet;
module.exports = gdp;
// module.exports = Happiness;
// module.exports = Gini;
// module.exports = LifeExp;

