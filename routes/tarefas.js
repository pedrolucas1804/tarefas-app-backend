const express = require("express");
const router = express.Router();
const TarefasController = require("../controllers/TarefasController");

// GET    /tarefas       → lista todas
router.get("/", TarefasController.index);

// GET    /tarefas/:id   → busca uma
router.get("/:id", TarefasController.show);

// POST   /tarefas       → cria nova
router.post("/", TarefasController.store);

// PUT    /tarefas/:id   → atualiza
router.put("/:id", TarefasController.update);

// DELETE /tarefas/:id   → remove
router.delete("/:id", TarefasController.destroy);

module.exports = router;
