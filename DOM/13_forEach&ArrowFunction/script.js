// FOREACH
// Constantemente vamos selecionar uma lista de itens do dom. A melhor forma para interagirmos com os mesmos é utilizando o método forEach.

const imgs1 = document.querySelectorAll('img');

imgs1.forEach(function(item){
  console.log(item);
});

// PARÂMETROS DO FOREACH
// O primeiro parâmetro é o callback, ou seja, a função que será ativada a cada item. Esse função pode receber três parâmetros: valorAtual, index e array;

const imgs2 = document.querySelectorAll('img');

imgs2.forEach(function(valorAtual, index, array){
  console.log(item); // o item atual no loop
  console.log(index); // o número do index
  console.log(array); // a Array completa
});

// FOREACH E ARRAY
// forEach é um método de Array, alguns objetos array-like possuem este método. Caso não possua, o ideal é transformá-los em uma array.

const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);

titulosArray.forEach(function(item){
  console.log(item);
});

// ARROW FUNCTION
// Sintaxe curta em relação a function expression. Basta remover a palavra chave function e adicionar a fat arrow => após os argumentos.

const imgs3 = document.querySelectorAll('img');

imgs3.forEach((item) => {
  console.log(item);
});

// PARÂMETROS E PARÊNTESES
const imgs4 = document.querySelectorAll('img');

// parâmetro único não precisa de parênteses
imgs4.forEach(item => {
  console.log(item);
});

// multiplos parâmetros precisam de parênteses
imgs4.forEach((item, index) => {
  console.log(item, index);
});

// sem parâmetro precisa dos parênteses, mesmo vazio
let i1 = 0;
imgs.forEach(() => {
  console.log(i1++);
});
// É melhor utilizar os parênteses

// RETURN
// É possível omitir as chaves {} para uma função que retorna uma linha.

const imgs5 = document.querySelectorAll('img');

imgs5.forEach(item => 
  console.log(item)
);

imgs5.forEach(item => console.log(item));
// Não é permitido fechar a linha com ;

// EXERCÍCIO

// Mostre no console cada parágrado do site
const paragrafos = document.querySelectorAll('p')
console.log(paragrafos);

paragrafos.forEach((item) => {console.log(item)});
// Mostre o texto dos parágrafos no console
paragrafos.forEach((item) => {console.log(item.innerText)});
// Como corrigir os erros abaixo:

// const imgs = document.querySelectorAll('img');

// imgs.forEach(item, index => {
//   console.log(item, index);
// });

// let i = 0;
// imgs.forEach( => {
//   console.log(i++);
// });

// imgs.forEach(() => i++);

//correção:

// const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => { //colocar os parenteses
  console.log(item, index);
});

let i = 0;
imgs.forEach(() => { //colocar os parenteses
  console.log(i++);
});

imgs.forEach(() => i++);