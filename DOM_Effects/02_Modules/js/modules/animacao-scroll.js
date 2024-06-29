//Animação ao Scroll

export default function initScrollAnimate() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');

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
