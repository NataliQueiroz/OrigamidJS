var possuiGraduacao = false;
var possuiDoutorado = true;

if(possuiGraduacao){
  console.log('é verdadeiro')
} else if(possuiDoutorado){
  console.log('Possui Doutorado')
} else{
  console.log('Não possui nada')
};

var nome;

if(nome){
  console.log(nome);
}else{
  console.log('Nome não existe')
};

var x = 10;

console.log(x === 10)

if ((5 -5 )&& (5+5)) {
  console.log('verdadeiro') 
} else {
  console.log('Falso')
}

var condicional = (5-10)&& (5+5);
if (condicional){
  console.log('verdadeiro', condicional)
} else {
  console.log('Falso')
}

var condicional2 = (5-5) || (5+5) || (20-2);
console.log(condicional2);

var corFavorita = 'Azul';

switch(corFavorita){
  case 'Vermelho':
  console.log('Garantido campeão');
  break;
  case 'Azul':
  console.log('boi velho podi, nam');
  break;
  case 'campeão':
    console.log('somente Garantido');
  default:
    console.log('33 vezes campeão, só tem um!')
}