// Array Iteração

// [].FOREACH()
// [].forEach(callback(itemAtual, index, array)) a função de callback é executada para cada item da array. Ela possui três argumentos, itemAtual (valor do item da array), index (index do valor na array) e array (array original).

const carros1 = ['Ford', 'Fiat', 'Honda'];
carros1.forEach(function(item, index, array) {
  console.log(item.toUpperCase());
});

// com Arrow Function
carros1.forEach((item, index, array) => {
  console.log(item.toUpperCase());
});

// O método sempre retorna undefined

// ARROW FUNCTION
const li = document.querySelectorAll('li');

li.forEach(i => i.classList.add('ativa'));

li.forEach(function(item) {
  item.classList.add('ativa');
});

// MODIFICAR A ARRAY ORIGINAL
// O terceiro argumento do callback é uma referência direta e se modificado irá também modificar a array original.

const carros2 = ['Ford', 'Fiat', 'Honda'];
carros2.forEach((item, index, array) => {
  array[index] = 'Carro ' + item;
});

carros2; // ['Carro Ford', 'Carro Fiat', 'Carro Honda']

// É melhor utilizarmos o map para isso

// [].MAP()
// [].map(callback(itemAtual, index, array)) funciona da mesma forma que o forEach(), porém ao invés de retornar undefined, retorna uma nova array com valores atualizados de acordo com o return de cada iteração.

const carros3 = ['Ford', 'Fiat', 'Honda'];
const newCarros1 = carros3.map((item) => {
  return 'Carro ' + item;
});

carros3; // ['Ford', 'Fiat', 'Honda']
newCarros1; // ['Carro Ford', 'Carro Fiat', 'Carro Honda']; 

// VALOR RETORNADO
// Se não retornarmos nenhum valor durante a iteração utilizando map, o valor retornado como de qualquer função que não possui o return, será undefined.

const carros = ['Ford', 'Fiat', 'Honda'];
const newCarros = carros.map((item) => {
  const novoValor = 'Carro ' + item;
});

newCarros; // [undefined, undefined, undefined];

// ARROW FUNCTION E [].MAP()
// Uma Arrow Function de linha única e sem chaves irá retornar o valor após a fat arrow =>.

const numeros1 = [2, 4, 6, 8, 10, 12, 14];
const numerosX3_1 = numeros1.map(n => n * 3);

numerosX3_1; // [6, 12, 18, 24, 30, 36, 42];

// [].MAP() VS [].FOREACH()
// Se o objetivo for modificar os valores da array atual, sempre utilize o map, pois assim uma nova array com os valores modificados é retornada e você pode imediatamente iterar novamente sobre estes valores.

const numeros2 = [2, 4, 6, 8, 10, 12, 14];
const numerosX3_2 = numeros2.map(n => n * 3);

numerosX3_2; // [6, 12, 18, 24, 30, 36, 42];

// [].MAP() COM OBJETOS
// Map pode ser muito útil para interagirmos com uma array de objetos, onde desejamos isolar um valor único de cada objeto.

const aulas1 = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
]

const tempoAulas = aulas1.map(aula => aula.min);
// [15, 10, 20, 25];

const puxarNomes = aula => aula.nome;
const nomesAulas = aulas1.map(puxarNomes);
// ['HTML 1', 'HTML 2', 'CSS 1', 'JS 1']

// [].REDUCE()
// [].reduce(callback(acumulador, valorAtual, index, array), valorInicial) executa a função de callback para cada item da Array. Um valor especial existe nessa função de callback, ele é chamado de acumulador, mas é na verdade apenas o retorno da iteração anterior.

const aulas2 = [10, 25, 30];
const total1 = aulas2.reduce((acumulador, atual) => {
  return acumulador + atual;
});
total1; // 65

const total2 = aulas2.reduce((acc, cur) => acc + cur, 100);
total2; // 165

// REDUCE PASSO A PASSO 1
// O primeiro parâmetro do callback é o valor do segundo argumento passado no reduce(callback, inicial) durante a primeira iteração. Nas iterações seguintes este valor passa a ser o retornado pela anterior.

const aulas3 = [10, 25, 30];

// 1
// aulas3.reduce((0, 10) => {
//   return: 0 + 10
// }, 0); // retorna 10

// // 2
// aulas3.reduce((10, 25) => {
//   return 10 + 25;
// }, 0); // retorna 35

// // 3
// aulas3.reduce((35, 30) => {
//   return 35 + 30;
// }, 0); // retorna 65

// REDUCE PASSO A PASSO 2
// Se não definirmos o valor inicial do acumulador, ele irá pular a primeira iteração e começara a partir da segunda. Neste caso o valor do acumulador será o valor do item da primeira iteração.

const aulas4 = [10, 25, 30];

// // 1
// aulas4.reduce((10, 25) => {
//   return 10 + 25;
// }) // retorna 35

// // 2
// aulas4.reduce((35, 30) => {
//   return 35 + 30;
// }) // retorna 65

// MAIOR VALOR COM [].REDUCE()
const numeros3 = [10, 25, 60, 5, 35, 10];

const maiorValor = numeros3.reduce((anterior, atual) => {
  return anterior > atual ? atual : anterior;
});

maiorValor; // 60

// PODEMOS RETORNAR OUTROS VALORES
const aulas5 = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
]

const listaAulas = aulas5.reduce((acumulador, atual, index) => {
  acumulador[index] = atual.nome;
  return acumulador;
}, {})

// PASSO A PASSO REDUCE
// Passo a passo do método reduce criando um Objeto.

// // 1
// aulas.reduce(({}, {nome: 'HTML 1', min: 15}, 0) => {
//   {}[0] = 'HTML 1';
//   return {0: 'HTML 1'};
// }, {})

// // 2
// aulas.reduce(({0: 'HTML 1'}, {nome: 'HTML 2', min: 10}, 1) => {
//   {0: 'HTML 1'}[1] = 'HTML 2';
//   return {0: 'HTML 1', 1: 'HTML 2'};
// }, {})

// // 3
// aulas.reduce(({0: 'HTML 1', 1: 'HTML 2'}, {nome: 'CSS 1', min: 20}, 2) => {
//   {0: 'HTML 1', 1: 'HTML 2'}[2] = 'CSS 1';
//   return {0: 'HTML 1', 1: 'HTML 2', 2: 'CSS 1'};
// }, {})

// // 4
// aulas.reduce(({0: 'HTML 1', 1: 'HTML 2', 2: 'CSS 1'}, {nome: 'JS 1', min: 25}, 3) => {
//   {0: 'HTML 1', 1: 'HTML 2', 2: 'CSS 1'}[3] = 'JS 1';
//   return {0: 'HTML 1', 1: 'HTML 2', 2: 'CSS 1', 3: 'JS 1'};
// }, {})

// [].REDUCERIGHT()
// Existe também o método [].reduceRight(), a diferença é que este começa a iterar da direita para a esquerda, enquanto o reduce itera da esquerda para a direita.

const frutas1 = ['Banana', 'Pêra', 'Uva'];

const frutasRight = frutas1.reduceRight((acc, fruta) => acc + ' ' + fruta);
const frutasLeft = frutas1.reduce((acc, fruta) => acc + ' ' + fruta);

frutasRight; // Uva Pêra Banana
frutasLeft; // Banana Pêra Uva

// [].SOME()
// [].some(), se pelo menos um return da iteração for truthy, ele retorna true.

const frutas2 = ['Banana', 'Pêra', 'Uva'];
const temUva = frutas2.some((fruta) => {
  return fruta === 'Uva';
}); // true

function maiorQue100(numero) {
  return numero > 100;
}
const numeros4 = [0, 43, 22, 88, 101, 2];
const temMaior = numeros4.some(maiorQue100); // true

// [].EVERY()
// [].every(), se todos os returns das iterações forem truthy, o método irá retornar true. Se pelo menos um for falsy, ele irá retornar false.

const frutas3 = ['Banana', 'Pêra', 'Uva', ''];
// False pois pelo menos uma fruta
// está vazia '', o que é um valor falsy
const arraysCheias = frutas3.every((fruta) => {
  return fruta; // false
});

const numeros5 = [6, 43, 22, 88, 101, 29];
const maiorQue3 = numeros5.every(x => x > 3); // true

// [].FIND() E [].FINDINDEX()
// [].find(), retorna o valor atual da primeira iteração que retornar um valor truthy. Já o [].findIndex(), ao invés de retornar o valor, retorna o index deste valor na array.

const frutas4 = ['Banana', 'Pêra', 'Uva', 'Maçã'];
const buscaUva = frutas4.findIndex((fruta) => {
  return fruta === 'Uva'; 
}); // 2

const numeros6 = [6, 43, 22, 88, 101, 29];
const buscaMaior_45 = numeros6.find(x => x > 45); // 88

// [].FILTER()
// [].filter(), retorna uma array com a lista de valores que durante a sua iteração retornaram um valor truthy.

const frutas = ['Banana', undefined, null, '', 'Uva', 0, 'Maçã'];
const arrayLimpa = frutas.filter((fruta) => {
  return fruta; 
}); // ['Banana', 'Uva', 'Maçã']

const numeros7 = [6, 43, 22, 88, 101, 29];
const buscaMaior45 = numeros7.filter(x => x > 45); // [88, 101]

// FILTER EM OBJETOS
const aulas = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
]

const aulasMaiores = aulas.filter((aula) => { 
  return aula.min > 15;
});
// [{nome: 'CSS 1', min: 20}, {nome: 'JS 1', min: 25}]

// EXERCÍCIOS

// colar no html
// <section class="curso">
//   <h1>Web Design Completo</h1>
//   <p>Este curso é para quem deseja entrar ou já está no mercado de criação de websites.</p>
//   <span class="aulas">80</span>
//   <span class="horas">22</span>
// </section>
// <section class="curso">
//   <h1>WordPress Como CMS</h1>
//   <p>No curso de WordPress Como CMS, você aprende do zero como pegar qualquer site em HTML e torná-lo totalmente gerenciável com a plataforma do WordPress.</p>
//   <span class="aulas">46</span>
//   <span class="horas">9</span>
// </section>
// <section class="curso">
//   <h1>UI Design Avançado</h1>
//   <p>Este é um curso avançado de User Interface Design.</p>
//   <span class="aulas">55</span>
//   <span class="horas">15</span>
// </section>

// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso
const cursos = document.querySelectorAll('.curso')
const arrayCursos = Array.from(cursos)

const objetosCurso = arrayCursos.map((curso) => {
  const titulo = curso.querySelector('h1').innerText
  const descricao = curso.querySelector('p').innerText
  const aulas = curso.querySelector('.aulas').innerText
  const horas = curso.querySelector('.horas').innerText
  return {
    titulo,
    descricao,
    aulas,
    horas
  }
})

console.log(objetosCurso);

// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];
const maioresQue100 = numeros.filter(n => n > 100)
console.log(maiorQue100);


// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']
const possuiBaixo = instrumentos.some((item) => {
  return item === 'Baixo'
})
console.log(possuiBaixo);

// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  }
]

const valorTotal = compras.reduce((acumulador, item) => {
  const precoLimpo = +item.preco.replace('R$', '').replace(',', '.')
  return acumulador + precoLimpo
}, 0)

console.log(valorTotal);