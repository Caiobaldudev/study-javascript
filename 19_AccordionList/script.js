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

function initTabNav() {
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabContent = document.querySelectorAll(".js-tabcontent section");

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("ativo");
    function activeTab(index) {
      tabContent.forEach((content) => {
        content.classList.remove("ativo");
      });
      tabContent[index].classList.add("ativo");
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}
initTabNav();

function initAccordion() {
  const accordionList = document.querySelectorAll(".js-accordion dt");
  const activeClass = "ativo"; //como está repetindo muito, posso criar uma varável, se acaso eu mudar o nome da class não precisar trocar em tudo

  if (accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    function activeAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}
initAccordion();
