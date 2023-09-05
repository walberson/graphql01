//* INSTANCIANDO O EXPRESS
const express = require("express");
const app = express();
app.use(express.json());
//*CRIANDO UMA PORTA
const port = 3000;
//*CRIANDO UMA ROTA
app.get("/mensagem", (req, res) => res.json({ message: "Hello World!" }));
//* INICIANDO O SERVIDOR
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
