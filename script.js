// Some 500 ao valor de scroll abaixo,
// atribuindo o novo valor a scroll
var scroll = 1000;
var mais = 500;
console.log((scroll += mais));

// Atribua true para a variável darCredito,
// caso o cliente possua carro e casa.
// E false caso o contrário.
var possuiCarro = false;
var possuiCasa = true;
var darCredito =
  possuiCarro && possuiCasa ? "Liberar Crédito" : "Crédito Negado";
console.log(darCredito);
