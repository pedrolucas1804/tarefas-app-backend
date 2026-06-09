// Model de Tarefa
// Armazenamento em memória (simula banco de dados)
let tarefas = [
  { id: 1, titulo: "Estudar React Native", descricao: "Aprender componentes e hooks", concluida: false },
  { id: 2, titulo: "Fazer atividade", descricao: "Desenvolver o app CRUD", concluida: false },
];

let proximoId = 3;

const TarefaModel = {
  // Retorna todas as tarefas
  getAll() {
    return tarefas;
  },

  // Busca tarefa por ID
  getById(id) {
    return tarefas.find((t) => t.id === parseInt(id));
  },

  // Cria nova tarefa
  create({ titulo, descricao }) {
    const novaTarefa = {
      id: proximoId++,
      titulo,
      descricao: descricao || "",
      concluida: false,
    };
    tarefas.push(novaTarefa);
    return novaTarefa;
  },

  // Atualiza tarefa existente
  update(id, { titulo, descricao, concluida }) {
    const index = tarefas.findIndex((t) => t.id === parseInt(id));
    if (index === -1) return null;

    tarefas[index] = {
      ...tarefas[index],
      titulo: titulo !== undefined ? titulo : tarefas[index].titulo,
      descricao: descricao !== undefined ? descricao : tarefas[index].descricao,
      concluida: concluida !== undefined ? concluida : tarefas[index].concluida,
    };

    return tarefas[index];
  },

  // Remove tarefa
  delete(id) {
    const index = tarefas.findIndex((t) => t.id === parseInt(id));
    if (index === -1) return false;
    tarefas.splice(index, 1);
    return true;
  },
};

module.exports = TarefaModel;
