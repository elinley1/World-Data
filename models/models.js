var Sequelize = require("sequelize");

var sequelize = require("../config/config.js");


var Happiness = sequelize.define("happiness", {
    country: {
        type: Sequelize.STRING,
        allowNull: false
    },
    code: {
        type: Sequelize.STRING,
        allowNull: true
    },
    happinessIdx: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    year: {
        type: Sequelize.DATEONLY,
        allowNull: false
    }
}); 

var Gdp = sequelize.define("gdp", {
    country: {
        type: Sequelize.STRING,
        allowNull: false
    },
    code: {
        type: Sequelize.STRING,
        allowNull: false
    },
    gdpIdx: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    year: {
        type: Sequelize.DATEONLY,
        allowNull: false
    }
});

var Gini = sequelize("gini", {
    country: {
        type: Sequelize.STRING,
        allowNull: false
    },
    code: {
        type: Sequelize.STRING,
        allowNull: true
    },
    giniIdx: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    year: {
        type: Sequelize.DATEONLY,
        allowNull: false
    }
});

var Internet = sequelize("internet", {
    country: {
        type: Sequelize.STRING,
        allowNull: false
    },
    code: {
        type: Sequelize.STRING,
        allowNull: true
    },
    internetUse: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    year: {
        type: Sequelize.DATEONLY,
        allowNull: false
    }
});

var LifeExp = sequelize("lifeexp", {
    country: {
        type: Sequelize.STRING,
        allowNull: false
    },
    code: {
        type: Sequelize.STRING,
        allowNull: true
    },
    lifeExp: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    year: {
        type: Sequelize.DATEONLY,
        allowNull: false
    }
})

Gdp.syn();
Happiness.sync();
Gini.sync();
Internet.sync();
LifeExp.sync();

module.exports = Internet;
module.exports = Gdp;
module.exports = Happiness;
module.exports = Gini;
module.exports = LifeExp;

