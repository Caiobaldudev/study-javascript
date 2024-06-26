// const h1 = document.querySelector('h1')
// console.log(Object.prototype.toString.call(h1));
// console.log(h1.dataset);

// HTMLELEMENT
// Todo elemento HTML do DOM herda propriedades e métodos do construtor HTMLElement.

const h1 = document.querySelector('h1');
Object.prototype.toString.call(h1); // [object HTMLHeadingElement]
// HTMLHeadingElement > HTMLElement > Element > Node > EventTarget > Object

// DATASET
// dataset é uma propriedade de HTMLElement, essa propriedade é um objeto do tipo DOMStringMap. Dentro desse objeto existe uma coleção de chave / valor, com todos os atributos do elemento html que começarem com data-.

// <div data-cor="azul" data-width="500">Uma Div</div>
// <span data-anime="left" data-tempo="2000">Um Span</span>

// Ambos os valores selecionam a mesma div acima.
let div = document.querySelector('div');
div = document.querySelector('[data-cor]');
div = document.querySelector('[data-cor="azul"]');

div.dataset;
// DOMStringMap {cor: "azul", width: "500"}
div.dataset.cor; // 'azul'
div.dataset.width; // '500'
div.dataset.tempo = 1000;
// DOMStringMap {cor: "azul", width: "500", tempo: "1000"}

// DATA ATRIBUTES
// Os atributos e valores que começarem com data- poderão ser utilizados como forma de configuração de plugins e interações DOM / JS.

//<div data-anima="left" data-tempo="1000">Div 1</div>
//<div data-anima="right" data-tempo="2000">Div 2</div>

const divs = document.querySelectorAll('[data-anima]');
divs.forEach((div) => {
  div.classList.add(div.dataset.anima);
});

// adiciona em cada div
// uma classe com o mesmo nome
// que o valor de data

// DATA VS CLASS
// A vantagem de se utilizar data atributes é que torna mais fácil evitarmos conflitos com estilos do CSS. Além de deixar a estrutura da tag mais organizada.

// <div data-anima="left" data-tempo="1000">Div 1</div>
// <div class="anima-left tempo-1000">Div 2</div>

// NOMENCLATURA
// Por padrão o JavaScript não aceita - (traço) como caracter válido para nomear propriedades. Então qualquer traço será removido e a letra seguinte transformada em maiúscula.

// <div data-anima-scroll="left">Div 1</div>

const div = document.querySelector('[data-anima-scroll]');
div.dataset;
// {animaScroll: 'left'}
div.dataset.animaScroll; // left
div.dataset.tempoTotal = 1000;
// Na div vira data-tempo-total="1000"

delete div.dataset.animaScroll; // remove o atributo


// EXERCÍCIOS
// Adicione um atributo data-anime="show-down" e
// data-anime="show-right" a todos as section's
// com descricão dos animais.

// Utilizando estes atributos, adicione a classe
// show-down ou show-right a sua respectiva section
// assim que a mesma aparecer na tela (animacao tab)

// No CSS faça com que show-down anime de cima para baixo
// e show-right continue com a mesma animação da esquerda
// para a direita

// Nas tags sections do index.html foi adicionado o (data-anime="show-right")
// Na nossa animação, definimos uma variável (para não ficar muito grande) pegando nosso dataset e passamos como mais uma classe que irá ser adicionada
// function activeTab(index) {
//   tabContent.forEach((content) => {
//     content.classList.remove("ativo");
//   });
//   const direction = tabContent[index].dataset.anime  ****
//   tabContent[index].classList.add("ativo", direction);  ****
// }

// Onde tínhamos uma única animação em nosso css, agora podemos criar a show-right e a show-down já que é adicionada junto com o 'ativo'
// .js-tabcontent section.ativo {
//   display: block !important;  // tiramos o animation desse, já que criamos especificadamente outras
// }

// .js-tabcontent section.ativo.show-right {
//   animation: show-right 0.5s forwards; // podemos tirar o display block desse porque já está na adição da classe ativo
// }

// .js-tabcontent section.ativo.show-down {
//   animation: show-down 0.5s forwards;
// }

// Animações novas v

// @keyframes show-right {
//   from {
//     opacity: 0;
//     transform: translate3d(-30px, 0, 0);
//   }
//   to {
//     opacity: 1;
//     transform: translate3d(0px, 0, 0);
//   }
// }

// @keyframes show-down {
//   from {
//     opacity: 0;
//     transform: translate3d(0, -30px, 0);
//   }
//   to {
//     opacity: 1;
//     transform: translate3d(0px, 0, 0);
//   }
// }

// Substitua todas as classes js- por data atributes.

{/* <div class="animais-descricao" data-tab="content"></div> */}

// E alteramos no css

// .js [data-tab="content"] section {
//   display: none;
// }

// [data-tab="content"] section.ativo {
//   display: block !important;
// }

// [data-tab="content"] section.ativo.show-right {
//   animation: show-right 0.5s forwards;
// }

// [data-tab="content"] section.ativo.show-down {
//   animation: show-down 0.5s forwards;
// }

// E também nas animações:

// const tabMenu = document.querySelectorAll("[data-tab='menu'] li");
// const tabContent = document.querySelectorAll("[data-tab='content'] section");

// Fazemos também com Scroll:
// Adicionamos o data-anime="scroll" onde tiver js-scroll nas tags do projeto

// Ateramos na nossa animação em:

// function initScrollAnimate() {
//   const sections = document.querySelectorAll('[data-anime="scroll"]');

// E em nosso CSS:

// .js [data-anime='scroll'] {
//   opacity: 0;
//   transform: translate3d(-30px, 0, 0);
//   transition: .3s;
// }

// .js [data-anime='scroll'].ativo {
//   opacity: 1;
//   transform: translate3d(0, 0, 0);
// }

// E por fim fazemos para os demais, como js-menu / acorddion e etc..
