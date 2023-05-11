

const { User } = require("../db/sequelize");


module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      username: {
        type: DataTypes.STRING,
        unique: {
          msg: 'Le nom est dejas pris.'
        }
      },
      password: {
        type: DataTypes.STRING
      }
    });
  
    return User;
  };
  

















