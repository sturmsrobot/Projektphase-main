const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const User = require("./Users");

const Point = sequelize.define("Point", {
  // Definition der Point-Attribute
  amount: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

// Definiere die Beziehung zu Benutzern
Point.belongsTo(User); // Ein Punkt gehört zu einem Benutzer // Sequelize fragt das ab

module.exports = Point;
