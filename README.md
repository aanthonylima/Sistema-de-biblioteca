# Manipulação de arrays (CRUD: Create, Read, Update, Delete).
Uso de métodos de array: push, find, findIndex, filter, map, forEach (em JavaScript).

O projeto parte da suposição de que fui contratado para desenvolver o sistema backend de uma biblioteca universitária. O sistema gerencia o acervo de livros e o processo de empréstimo. Cada livro no sistema será representado por um objeto.
O código contém o array "acervo", inicialmente com alguns livros de exemplo, e apresenta um menu com várias opções de manuseio desse array.

Pontos levados em consideração:

Parte 1: Gerenciamento Básico do Acervo (CRUD)
1. Adicionar Livro (adicionarLivro)
   - Criar uma função que recebe titulo, autor, anoPublicacao e genero como parâmetros.
   - A função deve gerar automaticamente um id único (simule isso, por exemplo, incrementando um contador).
   - O livro deve ser adicionado ao array acervo com disponivel: true.
2. Buscar Livro por Título (buscarLivroPorTitulo)
   - Criar uma função que recebe uma string titulo e retorna o primeiro livro cujo título contenha essa string (busca case-insensitive).
3. Listar Todos os Livros (listarLivros)
   - Criar uma função que imprime no console uma lista formatada de todos os livros no acervo.
4. Remover Livro por ID (removerLivro)
   - Criar uma função que recebe um id e remove o livro correspondente do array acervo.

Parte 2: Controle de Empréstimos
5. Emprestar Livro (emprestarLivro)
    - Criar uma função que recebe um titulo como parâmetro.
    - A função deve buscar o livro pelo título.
    - Se o livro for encontrado e estiver disponível, altere sua propriedade disponivel para false e retorne uma mensagem de sucesso.
    - Se o livro não for encontrado ou não estiver disponível, retorne uma mensagem de erro adequada.
6. Devolver Livro (devolverLivro)
    - Criar uma função que recebe um titulo como parâmetro.
    - A função deve buscar o livro pelo título.
    - Se o livro for encontrado e não estiver disponível, altere sua propriedade disponivel para true.
    - Se o livro não for encontrado ou já estiver disponível, retorne uma
mensagem de erro.

Parte 3: Relatórios
7. Listar Livros Disponíveis (listarLivrosDisponiveis)
    - Criar uma função que retorna um novo array contendo apenas os livros que estão disponíveis.
8. Listar Livros Emprestados (listarLivrosEmprestados)
    - Criar uma função que retorna um novo array contendo apenas os livros que não estão disponíveis.
9. Contador por Gênero (contarLivrosPorGenero)
    - Criar uma função que conta quantos livros existem em cada gênero. O resultado pode ser um objeto onde as chaves são os gêneros e os valores são as contagens.
    - Exemplo de saída: { "Programação": 5, "Ficção": 3, "História": 2 }
0. Encerramento de sistema (break)
