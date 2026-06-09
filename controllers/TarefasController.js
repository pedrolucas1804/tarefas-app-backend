const TarefaModel = require("../models/Tarefa");

const TarefasController = {
  // GET /tarefas - Lista todas
  index(req, res) {
    const tarefas = TarefaModel.getAll();
    res.json(tarefas);
  },

  // GET /tarefas/:id - Busca uma
  show(req, res) {
    const tarefa = TarefaModel.getById(req.params.id);
    if (!tarefa) {
      return res.status(404).json({ erro: "Tarefa não encontrada" });
    }
    res.json(tarefa);
  },

  // POST /tarefas - Cria uma nova
  store(req, res) {
    const { titulo, descricao } = req.body;

    if (!titulo || titulo.trim() === "") {
      return res.status(400).json({ erro: "O título é obrigatório" });
    }

    const novaTarefa = TarefaModel.create({ titulo: titulo.trim(), descricao });
    res.status(201).json(novaTarefa);
  },

  // PUT /tarefas/:id - Atualiza uma
  update(req, res) {
    const { titulo, descricao, concluida } = req.body;

    if (titulo !== undefined && titulo.trim() === "") {
      return res.status(400).json({ erro: "O título não pode ser vazio" });
    }

    const tarefaAtualizada = TarefaModel.update(req.params.id, {
      titulo: titulo ? titulo.trim() : titulo,
      descricao,
      concluida,
    });

    if (!tarefaAtualizada) {
      return res.status(404).json({ erro: "Tarefa não encontrada" });
    }

    res.json(tarefaAtualizada);
  },

  // DELETE /tarefas/:id - Remove uma
  destroy(req, res) {
    const removida = TarefaModel.delete(req.params.id);
    if (!removida) {
      return res.status(404).json({ erro: "Tarefa não encontrada" });
    }
    res.json({ message: "Tarefa removida com sucesso" });
  },
};

module.exports = TarefasController;
