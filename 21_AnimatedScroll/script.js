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

//Scroll Suave Dos Links Internos
//O operador Safari não tem suporte para o scroll option: smooth do scrollTo
function initScrollSuave() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');
  console.log(linksInternos);
  function scrollToSection(e) {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    const topo = section.offsetTop;

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    }); //só funciona no chrome/firefox

    //Forma alternativa
    // window.scrollTo({
    //   top: topo,
    //   behavior: "smooth",
    // });
  }
  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}
initScrollSuave();

//Animação ao Scroll

function initScrollAnimate() {
  const sections = document.querySelectorAll(".js-scroll");

  if (sections.length) {
    const windowMetade = window.innerHeight * 0.6;

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - windowMetade < 0;
        if (isSectionVisible) {
          section.classList.add("ativo");
        } else {
          //se eu quiser que retorne ao subir o scroll
          section.classList.remove("ativo");
        }
      });
    }
    animaScroll(); //devo executar minha função pelo menos uma vez para que o site já comece com uma seçãoa ativa e o usuário não dê de cara com um site vazio!

    window.addEventListener("scroll", animaScroll);
  }
}
initScrollAnimate();
