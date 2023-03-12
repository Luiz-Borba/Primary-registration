
const express = require("express");
const cors = require("cors")
const app = express();
const {PrismaClient} = require("@prisma/client")

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type, Authorization");
    app.use(cors());
    next();
  });

app.use(express.json())

app.post("/cadastroUser", async function (request, response) {
  const prisma = new PrismaClient({
  })
  const { email, CPF,password } = request.body;
  const result = await prisma.UserData.create({
    data:{
        email,
        CPF,
        password
    }
  })
  
  return response.send("Deu boa");
});
app.listen(8080)