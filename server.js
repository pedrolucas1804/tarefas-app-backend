const express = require("express");
const cors = require("cors");
const tarefasRoutes = require("./routes/tarefas");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Rota raiz
app.get("/", (req, res) => {
  res.json({ message: "API de Tarefas funcionando!" });
});

// Rotas do CRUD
app.use("/tarefas", tarefasRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
