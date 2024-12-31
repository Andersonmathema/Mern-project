const express = require("express");
const userRoute = require("./src/routes/user.route");
const app = express();

app.use("/soma", userRoute);

app.listen(3000);
// Rota
//Method HTTP - CRUD(Create, Read, Update, Delete)
//GET - pega info
//POST - Cria uma info
//PUT - Altera toda a info
//PATCH - Altera parte da info
//DELETE - Apaga uma info

//Name - Um identificador da rota
    
  //Function(callback) - responsável por executar algum comando
  // "Callbacks são funções anônimas chamadas dentro de outra função"

// app.get('/soma', (req, res) => {
//   const soma = 1+1;
//   res.send({soma: soma});
// });