// após criar os arquivo, já conseguimos mostrar algo no console com a função log()
// After creating the files, we can now show something in the console with the log() function
console.log('hello world!');

// Variáveis - Variables
// As variáveis são responsáveis por guardar dados na memória. Normalmente utilizamos os prefixos var, let ou const.
// Variables are responsible for storing data in memory. We normally use the prefixes var, let or const.

var persoName = 'John';
let age = 25;
const city = 'Rio de Janeiro';
const overEighteen = true

console.log(persoName);

// As variáveis evitam a repetição desnecessária de alguma parte do código.
// Variables avoid unnecessary repetition of some part of the code.

var price = 25;
var totalPurchased = 5;
var totalPrice = totalPurchased * price;
console.log(totalPrice);

// Também posso declarar várias variáveis em uma única linha sem precisar colocar o prefixo, utilizando somente a vírgula ','.
// I can also declare several variables on a single line without needing to prefix them, using just the comma ','.

var surname = 'Doe', livingCity = 'Rio';
console.log(surname, livingCity);

//Names
// Os nomes podem iniciar com $, _, ou letras.
// Podem conter números mas não iniciar com eles
// Case sensitive
// nome é diferente de Nome
// Não utilizar palavras reservadas
// https://www.w3schools.com/js/js_reserved.asp
// Camel case : 
// É comum nomearmos assim: abrirModal

// Names can start with $, _, or letters.
// May contain numbers but not start with them
// Case sensitive
// name is different from Name
// Do not use reserved words
// https://www.w3schools.com/js/js_reserved.asp
// Camelcase:
// It is common to name it like this: openModal

// Inválido - invalid :
// var §nome;
// var function;
// var 1possuiFaculdade;

// Válido - valid
var $selecionar;
var _nome;
var possuiFaculdadeNoExterior;

//MUDAR O VALOR ATRIBUÍDO - CHANGE THE ASSIGNED VALUE
// É possível mudar os valores atribuídos a variáveis declaradas com var e let. Porém não é possível modificar valores das declaradas com const.
// It is possible to change the values assigned to variables declared with var and let. However, it is not possible to modify values declared with const.

var idade = 28;
idade = 29;

let preco = 50;
preco = 25;

const possuiFaculdade = true;
// possuiFaculdade = false;
// Retorna um erro - return error

//EXERCÍCIO - EXERCISE
// Dica rápida, frases (string) devem ser colocadas entre aspas (simples ou duplas) e números não levam aspas.
// Quick tip, phrases (string) must be enclosed in quotation marks (single or double) and numbers do not have quotation marks.

// Declarar uma variável com o seu nome - Declare a variable with its name

// Declarar uma variável com a sua idade - Declare a variable with its age

// Declarar uma variável com a sua comida 
// favorita e não atribuir valor - Declare a variable with your food favorite and do not assign value

// Atribuir valor a sua comida favorita - Assign value to your favorite food

// Declarar 5 variáveis diferentes sem valores - Declare 5 different variables without values

const myName = 'Caio'
const myAge = 24;
var favoriteFood;
favoriteFood = 'Homemade hamburger'

var differentVariable1
var differentVariable2
var differentVariable3
var differentVariable4
var differentVariable5