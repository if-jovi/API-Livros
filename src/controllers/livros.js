const serviceLivros = require(`../service/livros`)

function buscarLivros(req,res){
    const livros = serviceLivros.buscarLivros()
    return res.status(200).json(livros)
}

function buscarLivrosID(req,res){
    const livros = serviceLivros.buscarLivrosID(req.params.id);
        if(!livros){
            return res.status(404).json({
                erro: `O livro com o id ${req.params.id} não foi encontrado`
            })
        }
        return res.status(200).json(livros);
}

function cadastrarLivros(req,res){
    const data = req.body
    if(!data.titulo||!data.autor||!data.anopublicado||!data.genero||!data.editora||!data.idioma){
        return res.status(400).json({
            erro: `Campos obrigatórios faltando!`
        })
    }else{
        serviceLivros.cadastrarLivros(req.body)
        return res.status(201).json({
            message:`Dados inseridos com sucesso`
        })
    }
}

function deletarLivro(req,res){
    const id= req.params.id
    // if (!id) {
    //     return res.status(400).json({ erro: "ID não fornecido!" })
    // }
    const sucesso = serviceLivros.deletarLivro(id);

    if (!sucesso) {
        return res.status(404).json({ erro: `O livro com ID ${id} não existe!` })
    }

    return res.status(200).json({ message: `Livro com ID ${id} deletado com sucesso!` })
}

function atualizarLivro(req, res) {
    const id = req.params.id;
    console.log(id)
    const dadosAtualizados = req.body;
    console.log(dadosAtualizados)
  
    const livroAtualizado = serviceLivros.atualizarLivro(parseInt(id), dadosAtualizados);
  
    if (!livroAtualizado) {
      return res.status(404).json({ erro: `Livro com id ${id} não encontrado!` });
    }
  
    return res.status(200).json({ message: 'Livro atualizado com sucesso!', livro: livroAtualizado });
  }


module.exports={
    buscarLivros,
    buscarLivrosID,
    cadastrarLivros,
    deletarLivro,
    atualizarLivro
}