const { DataTypes } = require("sequelize");
const conn = require("../db/conn.js");
const Tutor = require("./Tutor.js");

const Pet = conn.define("Pet", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  species: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  carry: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  weight: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  date_of_birth: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

Pet.associate = function (models) {
  Pet.belongsTo(models.Tutor);
};

module.exports = Pet;
