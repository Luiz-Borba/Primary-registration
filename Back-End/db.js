async function connect(){

    if(global.connection &&global.connection.this.state !== 'disconnected'){
        return global.connection;
    }

const mysql = require("mysql2/promisse");
const connection = await mysql.createConnection("mysql://root:root:3306/FristConection")
global.connection = connection;
console.log("Deu boa")
}
connect()
module.exports={}