//Accordion List

// Código inteiro - anterior (tabnavigation)
// const tabMenu = document.querySelectorAll(".js-tabmenu li");
// const tabContent = document.querySelectorAll(".js-tabcontent section");

// if (tabMenu.length && tabContent.length) {
//   tabContent[0].classList.add("ativo");
//   function activeTab(index) {
//     tabContent.forEach((content) => {
//       content.classList.remove("ativo");
//     });
//     tabContent[index].classList.add("ativo");
//   }

//   tabMenu.forEach((itemMenu, index) => {
//     itemMenu.addEventListener("click", () => {
//       activeTab(index);
//     });
//   });
// }

//No Accordion o texto fica escondido, focando apenas no título, porém, com a ação de 'click' podemos abrir esse título.
// Selecionamos cada elemento da lista, adicionamos uma classe ao clique, de 'ativo'.
//Quando vamos fazer mais que uma funcionalidade, podemos separar por funções para que não haja conflitos/erros.
//Então, podemos isolar o código antigo em uma função:





