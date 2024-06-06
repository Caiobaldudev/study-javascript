//Contructor Functions
//Criação base de um objeto:
const carro = {
  marca: "Ford",
  modelo: "Fiesta",
  ano: 2018,
  preco: 10000,
};
//Se tentarmos passar novos atributos da seguinter forma:

carro.portas = 4;
carro.cor = "Preto";
carro.preco = 15000;

console.log(carro);
// Veremos que em nosso console ele terá reatribuido os valores que passamos
// porém, se tentarmos criar outro novo objeto com novos atributos, ele irá sobscrever ambos os objetos anteriores

// Para que isso não ocorra e possamos criar novos objetos sem ter que repetir e criar novos nomes usamos:
//As Constructor Functions:
// Criamos em formato de função e passamos o 'this' para referenciar o objeto dessa função.
function Carro(marca, modelo, ano, preco) {
  this.marca = marca;
  this.modelo = modelo;
  this.ano = ano;
  this.preco = preco;
}

// OBS: Ao criar um novo objeto com a Constructor Function, o 'this' irá referenciar o objeto criado.

const Ford = new Carro("Ford", "Fiesta", 2018, 10000);
const Fiat = new Carro("Fiat", "Uno", 2015, 5000);

console.log(carro1);
console.log(carro2);
//Agora sim teremos objetos diferentes. sem sobrescrever.

// Sempre devemos colocar o 'new' para que a Constructor Function entenda que é um novo objeto.
// A palavra chave 'new' é responsável por criar um novo objeto baseado na função que passarmos a frente dela.
// O 'this' faz referência ao próprio objeto construído com a Contructor Function.

// Podemos passar dentro dessa função qualquer coisa, por exemplo podemos fazer um cálculo de taxas do veículo retornando seu preço final:

function Carro(marca, modelo, ano, preco) {
  const taxa = 1.2;
  const precoFinal = precoInicial * taxa;
  this.marca = marca;
  this.modelo = modelo;
  this.ano = ano;
  this.preco = precoFinal;
}

const honda = new Carro("honda", 2000);

console.log(honda);

// EXERCÍCIOS
// Transforme o objeto abaixo em uma Constructor Function

const pessoa = {
  nome: "Nome pessoa",
  idade: 0,
  andar() {
    console.log(this.nome + " andou");
  },
};

//Constructor Function
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.andar = function () {
    console.log(this.nome + "andou");
  };
}

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos
const joao = new Pessoa("João", 20); //exemplo
console.log(joao);
const maria = new Pessoa("Maria", 25);
console.log(maria);
const bruno = new Pessoa("Bruno", 15);
console.log(bruno);

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

function Dom(seletor) {
  const elementList = document.querySelectorAll(seletor);
  this.elements = elementList;
  this.addClass = function (classe) {
    elementList.forEach((element) => {
      element.classList.add(classe);
    });
  };
  this.removeClass = function (classe) {
    elementList.forEach((element) => {
      element.classList.remove(classe);
    });
  };
}

//para adicionar:
// listaItens.addClass('ativar');
// ul.addClass('ativar-ul');

//para remover:
const listaItens = new Dom("li");
const ul = new Dom("ul");
