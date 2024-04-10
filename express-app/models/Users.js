const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const User = sequelize.define("User", {
  userid: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  last_login: {
    type: DataTypes.DATETIME,
    allowNull: true,
  },
});

// Definieren der Assoziationen, falls erforderlich
User.associate = (models) => {
  // Definition der Assoziationen, falls benötigt
};

// Statische Methode für Benutzersuche nach Benutzernamen
User.findByUsername = async function (username) {
  try {
    const users = await User.findAll({ where: { username } });
    return users;
  } catch (error) {
    throw new Error("Fehler beim Suchen von Benutzern: " + error);
  }
};

module.exports = User;
