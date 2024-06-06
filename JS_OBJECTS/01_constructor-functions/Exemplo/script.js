// const Dom = {
//   seletor: "li",
//   element() {
//     return document.querySelector(this.seletor);

//   },
//   ativar() {
//     this.element().classList.add("ativo");
//   }
// };
Dom.seletor = "ul";
Dom.ativar();

//Constructor
function Dom(seletor) {
  (this.element = function () {
    return document.querySelector(seletor);
  }),
    (this.ativar = function () {
      this.element().classList.add("ativo");
    });
}

const li = new Dom("li");
const ul = new Dom("ul");
const lastLi = new Dom("li:last-child");
lastLi.ativar('posso ativar uma classe aqui');
//O poder do objeto é o parâmetro.
