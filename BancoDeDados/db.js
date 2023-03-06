const Sequelize = requie("sequelize");
const sequelize = new Sequelize("userData","root","root",{
    dialect:"mysql",
    host:"localhost",
    port:3306

})
modules.exports =sequelize;
