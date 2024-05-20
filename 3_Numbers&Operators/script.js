// NÚMEROS - NUMBERS
var idade = 28;
var gols = 1000;
var pi = 3.14; // ponto para decimal
var exp = 2e10; // 20000000000
// Precisão para até 15 digitos. - Accuracy up to 15 digits.

// OPERADORES ARITMÉTICOS - ARITHMETIC OPERATORS
var soma = 100 + 50; // 150
var subtracao = 100 - 50; // 50
var multiplicacao = 100 * 2; // 200
var divisao = 100 / 2; // 50
var expoente = 2 ** 4; // 16
var modulo = 14 % 5; // 4
// Lembrando que soma + em Strings serve para concatenar

// OPERADORES ARITMÉTICOS (STRINGS) 
var soma = '100' + 50; // 10050
var subtracao = '100' - 50; // 50
var multiplicacao = '100' * '2'; // 200
var divisao = 'Comprei 10' / 2; // NaN (Not a Number)
// É possível verificar se uma variável é NaN ou não com a função isNaN() - You can check whether a variable is NaN or not with the isNaN() function

// NAN = NOT A NUMBER
var numero = 80;
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso / 2 // NaN (Not a Number)

// A ORDEM IMPORTA - ORDER MATTERS
// Começa por multiplicação e divisão, depois por soma e subtração. - It starts with multiplication and division, then addition and subtraction.

var total1 = 20 + 5 * 2; // 30
var total2 = (20 + 5) * 2; // 50
var total3 = 20 / 2 * 5; // 50
var total4 = 10 + 10 * 2 + 20 / 2; // 40
// Parênteses para priorizar uma expressão - Parentheses to prioritize an expression

// OPERADORES ARITMÉTICOS UNÁRIOS
var incremento = 5;
console.log(incremento++); // 5
console.log(incremento); // 6

var incremento2 = 5;
console.log(++incremento2); // 6
console.log(incremento2); // 6
// Mesma coisa para o decremento --x

// OPERADORES ARITMÉTICOS UNÁRIOS
// O + e - tenta transformar o valor seguinte em número

var frase = 'Isso é um teste';
+frase; // NaN
-frase; // NaN

var idade = '28';
+idade; // 28 (número)
-idade; // -28 (número)
console.log(+idade + 5); // 33 

var possuiFaculdade = true;
console.log(+possuiFaculdade); // 1
// O - antes de um número torna ele negativo

// EXERCÍCIO
// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20;
//R:
// 35

// Crie duas expressões que retornem NaN
var expressionOne = 'Isso é um teste' / 2
console.log(expressionOne);
var aNumber = 2
+aNumber
console.log(aNumber);
// Somar a string '200' com o número 50 e retornar 250
var oneString = '200'
var anotherNumber = 50
var sum = Number(oneString) + anotherNumber
console.log(sum);

// ou

var somar = +'200' + 50
console.log(somar);

// Incremente o número 5 e retorne o seu valor incrementado
var wantIncrement = 5
console.log(wantIncrement++);
console.log(wantIncrement);

// Como dividir o peso por 2?
var numero = '80';
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso / 2; // NaN (Not a Number)

// Posso tranformar a string em número e já dividir por 2 direto

var numero2 = +'80' / 2;
var unidade2 = 'kg';
var peso2 = numero2 + unidade2; // '40kg'
console.log(peso2);
