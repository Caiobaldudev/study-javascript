export default function initModal() {
  const botaoAbrir = document.querySelector('[data-modal="abrir"]');
  const botaoFechar = document.querySelector('[data-modal="fechar"]');
  const containerModal = document.querySelector('[data-modal="container"]');

  if (botaoAbrir && botaoFechar && containerModal) {
    function abrirModal(e) {
      e.preventDefault();
      containerModal.classList.add("ativo");
    }

    function fecharModal(e) {
      e.preventDefault();
      containerModal.classList.remove("ativo");
    }

    function outModal(e) {
      if (e.target === this) {
        fecharModal(e);
      }
    }

    botaoAbrir.addEventListener("click", abrirModal);
    botaoFechar.addEventListener("click", fecharModal);
    containerModal.addEventListener("click", outModal);
  }
}

// Como temos uma classe que adiciona e outra que retira a classe "ativo", podemos retirar essa verbosidade utilizando o toggle:

// function toggleModal(e) {
//   e.preventDefault();
//   containerModal.classList.toggle("ativo");
// }
// // Somente essa função bastaria, depois disso, poderíamos passar o toggle modal nos 'addEventListener':

// botaoAbrir.addEventListener("click", toggleModal);
// botaoFechar.addEventListener("click", toggleModal);
