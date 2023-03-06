const Sequelize = require("sequelize");
const db = require("./db");
const User = db.define("userdata", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  passwod: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});



modules.exports = User;

User.sync({alter:true})
