const prompt = require('prompt-sync')()

acervo = [
  {id:1, titulo:"A Paciente Silenciosa", autor:"Alex Michaelides", ano:2019, genero:"Mistério", disponivel:true},
  {id:2, titulo:"Um de Nós Está Mentindo", autor:"Karen M. McManus", ano:2017, genero:"Mistério", disponivel:true},
  {id:3, titulo:"IT - A Coisa", autor:"Stephen King", ano:1986, genero:"Terror", disponivel:false},
  {id:4, titulo:"O Grande Gatsby", autor:"F. Scott Fitzgerald", ano:1925, genero:"Romance", disponivel:true}
]

id = acervo.length + 1

function adicionarLivro(titulo, autor, ano, genero){
    titulo = prompt("Título: ")
    autor = prompt("Autor: ")
    ano = prompt("Ano de publicação: ")
    genero = prompt("Gênero: ") 

    livro = {
        id: id++,
        titulo,
        autor,
        ano,
        genero,
        disponivel: true
    }

    acervo.push(livro)
    console.log ("Livro " + titulo + " adicionado com sucesso!")
}

function buscarLivroPorTitulo(){
    busca = prompt("Título a ser buscado: ")
    livroEncontrado = acervo.find(livro => livro.titulo.includes(busca))
    if (livroEncontrado){
      console.log ("Livro encontrado.")
      console.log ("ID: " + livroEncontrado.id + " | Título: " + livroEncontrado.titulo + " | Autor: " + livroEncontrado.autor + " | Ano: " + livroEncontrado.ano + " | Gênero: " + livroEncontrado.genero + " | Disponível: " + livroEncontrado.disponivel)
    }
    else{
      console.log ("Livro não encontrado. (Dica: Tente escrever exatamente como o livro foi cadastrado.)")
    }
}

function listarLivros() {
  if (acervo.length === 0){
    console.log ("No momento não há nenhum livro cadastrado.")
  }
  else {
    acervo.forEach(livro => {
      console.log ("ID: "+livro.id+" | Título: "+livro.titulo+" | Autor: "+livro.autor+" | Ano: "+livro.ano+" | Gênero: "+livro.genero+" | Disponível: "+livro.disponivel)
    });
  }
}

function removerLivro(){
  idRemovido = prompt("ID do livro a ser removido da biblioteca: ")
  indice = acervo.findIndex(livro => livro.id == idRemovido)
  if(indice !== -1){
      livroRemovido = acervo[indice]
      acervo.splice(indice, 1)
      console.log("Livro "+livroRemovido.titulo+" removido com sucesso.")
  }
  else{
    console.log ("ID não encontrado.\n")
  }
}

function emprestarLivro(){
  tituloBusca = prompt("Título do livro a ser emprestado: ")
  livro = acervo.find(livro => livro.titulo.includes(tituloBusca))
  if (livro){
    if (livro.disponivel){
        livro.disponivel = false
        console.log("Livro "+livro.titulo+" emprestado com sucesso.")
    }
    else{
      console.log("Livro não disponível para empréstimo.")
    }
  }
  else{
    console.log("Livro não encontrado.")
  }
}

function devolverLivro(){
  tituloBusca = prompt("Título do livro a ser devolvido: ")
  livro = acervo.find(livro => livro.titulo.includes(tituloBusca))
  if (livro){
    if (!livro.disponivel){
      livro.disponivel = true
      console.log ("Livro "+livro.titulo+" devolvido com sucesso.")
    }
    else{
      console.log ("Livro já devolvido antes.")
    }
  }
  else{
    console.log ("Livro não encontrado.")
  }
}

function listarLivrosDisponiveis(){
  disponiveis = acervo.filter(livro => livro.disponivel)
  if (disponiveis.length === 0){
    console.log("Nenhum livro disponível no momento.")
  }
  else {
    disponiveis.forEach(livro => console.log("ID: " + livro.id + " | Título: " + livro.titulo + " | Autor: " + livro.autor + " | Ano: " + livro.ano + " | Gênero: " + livro.genero))
  }
}

function listarLivrosEmprestados(){
  emprestados = acervo.filter(livro => !livro.disponivel)
  if (emprestados.length === 0){
    console.log("Nenhum livro emprestado no momento.")
  }
  else{
    emprestados.forEach(livro => console.log("ID: " + livro.id + " | Título: " + livro.titulo + " | Autor: " + livro.autor + " | Ano: " + livro.ano + " | Gênero: " + livro.genero))
  }
}

function contarLivrosPorGenero(){
  contador = {} 
  acervo.forEach(livro => {
    if(contador[livro.genero]){
      contador[livro.genero]++
    }
    else {
      contador[livro.genero] = 1
    }
  }) 
  console.log("Contagem de livros por gênero:", contador)
}

while(true){
  console.log("\nMenu: \n1 - Adicionar livro\n2 - Buscar livro\n3 - Listar livros\n4 - Remover livro\n5 - Emprestar livro\n6 - Devolver livro\n7 - Livros disponíveis\n8 - Livros emprestados\n9 - Contador por gêneros\n0 - Encerrar o sistema\n")
  escolha = prompt("Digite o que quer fazer: ")

  if (escolha == 1){
    adicionarLivro()
  }
  else if (escolha == 2){
    buscarLivroPorTitulo()
  }
  else if (escolha == 3){
    listarLivros()
  }
  else if (escolha == 4){
    removerLivro()
  }
  else if (escolha == 5){
    emprestarLivro()
  }
  else if (escolha == 6){
    devolverLivro()
  }
  else if (escolha == 7){
    listarLivrosDisponiveis()
  }
  else if (escolha == 8){
    listarLivrosEmprestados()
  }
  else if (escolha == 9){
    contarLivrosPorGenero()
  }
  else if (escolha == 0){
    console.log ("\nSistema encerrado. Até mais!")
    break
  }
  else{
    console.log ("\nDigite um número válido.")
  }
  continuar = prompt("\nDê ENTER para continuar.")
}
