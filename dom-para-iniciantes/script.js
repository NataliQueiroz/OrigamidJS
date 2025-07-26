//window.alert("Isso Mesmo");
const h1Selecionado = document.querySelector("h1");

h1Selecionado.addEventListener("click", function () {
  console.log("Clicou em ", h1Selecionado.innerText);
});
