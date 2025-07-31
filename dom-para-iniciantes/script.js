// Retorne no console todas as imagens do site
const imagensSite = document.querySelectorAll("img");
console.log(imagensSite);
// Retorne no console apenas as imagens que começaram com a palavra imagem
// // const imagensAnimais = document.querySelectorAll("img[src ^= img/imagem]");
// console.log(imagensAnimais);
// Selecione todos os links internos (onde o href começa com #)
const linksInternos = document.querySelectorAll("[href^='#']");
console.log(linksInternos);
// Selecione o primeiro h2 dentro de .animais-descricao
const selecionarH2 = document.querySelector("h2");
console.log(selecionarH2);
// Selecione o último p do site
const ultimoP = document.querySelector(".animais-descrição p:last-child");
console.log(ultimoP);
