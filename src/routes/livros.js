const controllers = require(`../controllers/livros`)

module.exports = (app) => {
    app.get(`/livros`,controllers.buscarLivros)
    app.get(`/livros/:id([0-9]+)`,controllers.buscarLivrosID)
    app.post(`/livros`,controllers.cadastrarLivros)
    app.delete(`/livros/:id([0-9]+)`,controllers.deletarLivro)
    app.patch(`/livros/:id([0-9]+)`,controllers.atualizarLivro)
}