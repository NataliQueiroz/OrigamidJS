//var ultimoItem = videoGames.pop();

// for (var numero = 0; numero <= 4; numero++) {
//   console.log(numero);
// }
// var i = 0;
// while (i < 10) {
//   console.log(i);
//   i++;
// }

var videoGames = ["Switch", "PS4", "Xbox", "3DS"];

for (var item = 0; item < videoGames.length; item++) {
  console.log(videoGames[item]);
  if (videoGames[item] === "PS4") {
    break;
  }
}
var frutas = ["banana", "pera", "maçã", "laranja", "côco"];
frutas.forEach(function (frutas, index, array) {
  console.log(frutas, index, array);
});
