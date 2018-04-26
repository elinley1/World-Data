module.exports = function(sequelize, DataTypes) {
    var Happiness = sequelize.define("happiness", {
        country: {
            type: DataTypes.STRING,
            allowNull: false},
        code: {
            type: DataTypes.STRING,
            allowNull: false},
        happinessIdx: {
            type: DataTypes.FLOAT,
            allowNull: false},
    }); 
}

return Happiness;