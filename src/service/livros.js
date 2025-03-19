const livros = [
    {id:1 , titulo:"Codigo Limpo" , autor:"Juca", anopublicado: 2004 , genero:"Comedia", editora: "Bookman",idioma:"portugues"},
    {id:2 , titulo:"Tosco" , autor:"Aurea", anopublicado:2015  , genero:"Ação", editora: "Bookman",idioma:"ingles"},
    {id:3 , titulo:"Diario" , autor:"Helena", anopublicado:1996  , genero:"Comedia", editora: "Bookman",idioma:"ingles"},
    {id:4 , titulo:"DataBase" , autor:"Gabriela", anopublicado:2023  , genero:"Técnico", editora: "Bookman",idioma:"portugal"},
    {id:5 , titulo:"Chapeu" , autor:"Nayara", anopublicado:2022  , genero:"Tecnologia", editora: "O'Reilly",idioma:"uruguai"},
    {id:6 , titulo:"Pinoquio" , autor:"Emili", anopublicado:2009  , genero:"Tecnologia", editora: "Bookman",idioma:"ingles"}
]

function buscarLivros(){
    return livros
}

function buscarLivrosID(id){
    return livros.find((el)=> el.id == id)
}

function cadastrarLivros(dados){
    const novoLivro = {...dados}
    const maiorId = livros.length > 0 ? Math.max(...livros.map(livro => livro.id)) : 0;
    novoLivro.id = maiorId + 1;
    livros.push(novoLivro)
}

// function validarSeLivroExiste(id){
//     index = livros.findIndex(livro => livro.id == id)
//     if(index !== -1){
//     return true
//     }
//     return false
// }

function deletarLivro(id){
    index = livros.findIndex(livro => livro.id == id)

    if(index !== -1){
    livros.splice(index,1)
    return true
   }
   false
}

 function atualizarLivro(id,dadosAtualizados) {
    const index = livros.findIndex(livro => livro.id == id);
    if (index === -1) {
        return false
    }
    const livro = livros[index]

    if (dadosAtualizados.titulo){ livro.titulo = dadosAtualizados.titulo}
    if (dadosAtualizados.autor) {livro.autor = dadosAtualizados.autor}
    if (dadosAtualizados.anopublicado) {livro.anopublicado = dadosAtualizados.anopublicado}
    if (dadosAtualizados.genero){ livro.genero = dadosAtualizados.genero}
    if (dadosAtualizados.editora) {livro.editora = dadosAtualizados.editora}
    if (dadosAtualizados.idioma) {livro.idioma = dadosAtualizados.idioma}

    return livro
}

module.exports={
    buscarLivros,
    buscarLivrosID,
    cadastrarLivros,
    deletarLivro,
    atualizarLivro
}
    
