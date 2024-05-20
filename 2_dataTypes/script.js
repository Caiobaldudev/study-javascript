//Tipos de dados - Data Types
// Todos são primitivos exceto os objetos. - All are primitive except objects.

var personName = 'Caio'; // String
var age = 28; // Number
var hasCollege = true; // Boolean
var soccerTeam; // Undefined
var food = null; // Null
var aSymbol = Symbol() // Symbol
// Primitivos são dados imutáveis. - Primitives are immutable data.
// ----------------------------------------------------------------
var novoObjeto = {} // Object
// Para verificar o tipo de dado usamos o 'typeof'
var personName = 'Caio'; 
console.log(typeof personName); // String
//'typeof null' retorna object - return object

// STRING
// Você pode somar uma string e assim concatenar as palavras. - You can add a string and thus concatenate the words.
var myName = 'Caio';
var mySurname = 'Dev';
var completeName = myName + ' ' + mySurname;

// Você pode somar números com strings, o resultado final é sempre uma string. - You can add numbers to strings, the end result is always a string.
var gols = 1000;
var frase = 'Romário fez ' + gols + ' gols';

// ASPAS DUPLAS, SIMPLES E TEMPLATE STRING - DOUBLE, SINGLE, AND TEMPLATE STRINGS QUOTES

// 'JavaScript é "super" fácil';
// "JavaScript é 'super' fácil";
// "JavaScript é \"super\" fácil";
// `JavaScript é "super" fácil"`;
// "JavaScript é "super" fácil"; // Inválido

// Template string

var gols = 1000;
var frase1 = 'Romário fez ' + gols + ' gols';
var frase2 = `Romário fez ${gols} gols`; // Utilizando Template String
//Você deve passar expressões / variáveis dentro de ${} 

//EXERCISES
// Declare uma variável contendo uma string

// Declare uma variável contendo um número dentro de uma string

// Declare uma variável com a sua idade

// Declare duas variáveis, uma com seu nome
// e outra com seu sobrenome e some as mesmas

// Coloque a seguinte frase em uma variável: It's time

// Verifique o tipo da variável que contém o seu nome

var phraseOne = 'Essa é uma string'

var birds = 2
var phraseTwo = `Eu peguei ${birds} passarinhos` 

var myAge = 25;

var myName = 'Caio';
var mySurname = 'Dev';
var phraseThree = `Meu nome é ${myName} ${mySurname}`

var phraseFour = 'It\'s time'

console.log(typeof myName)