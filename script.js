function areaQuadrado(lado){
  return lado * lado;
}

console.log(areaQuadrado(2));

function pi() {
  return 3.14;
}

var total = 5 * pi(); // 15.7
console.log(pi());

function imc(peso,altura) {
    var imc = peso / altura * altura;
    return imc;
}
console.log(imc(61, 1,56));

function corFavorita(cor) {
  if(cor === 'azul') {
    return 'Você gosta do céu';
  } else if(cor === 'verde') {
    return 'Você gosta de mato';
  } else {
    return 'Você não gosta de nada';
  }
};
corFavorita(); 

addEventListener('click', function(){console.log('Oi')});

function imc2(peso, altura) {
  const imc = peso / (altura ** 2);
  console.log(imc);
}

imc2(80, 1.80); // retorna o imc
console.log(imc2(80, 1.80)); // retorna o imc e undefined

function terceiraIdade(idade) {
  if(typeof idade !== 'number') {
    return 'Por gentileza preencha um número'
  }
 else if (idade >= 60){
    return true;
  } else {
    return false;
  }
};

console.log(terceiraIdade('vaca'));
  
var totalPaises = 193;
function faltaVisitar(paisesVisitados){

  return `Faltam visitar ${ totalPaises - paisesVisitados} países`;
}
console.log(totalPaises);

var profissao = 'Designer';

function dados() {
  var nome = 'André';
  var idade = 28;
  function outrosDados() {
    var endereco = 'Rio de Janeiro';
    var idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

console.log(dados()); // Retorna 'André, 29, Rio de Janeiro, Designer'
//outrosDados(); // retorna um erro
