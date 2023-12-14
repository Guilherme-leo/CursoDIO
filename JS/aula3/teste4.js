var jogador1 = 1
var jogador2 = 0
var placar = 0
if(jogador1>jogador2){
	placar=1
} else if(jogador2>jogador1){
placar=2
}
switch (placar) {
  case 1:
    console.log("Jogador1 ganhou")
    break;
  case 2:
    console.log("Jogador2 ganhou")
    break
  default:
    console.log("Ninguém ganhou")
    break;
}