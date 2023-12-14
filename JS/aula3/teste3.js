var jogador1 = 0
var jogador2 = 3
var placar = 0

jogador1 >= 0 && jogador2 >= 0 ? console.log("Jogadores Válidos") : console.log("Jogadores Inválidos");

if (jogador1 > 0 && jogador2 == 0) {
  console.log("Jogador 1 marcou ponto")
    placar = jogador1 > jogador2
} else if (jogador2 > 0 && jogador1 == 0) {
  console.log("Jogador 2 marcou ponto")
    placar = jogador2 > jogador1
} else {
  console.log("Ninguém marcou ponto")
}

switch (placar) {
  case jogador1 > jogador2:
    console.log("Jogador1 ganhou")
    break;
  case jogador2 > jogador1:
    console.log("Jogador2 ganhou")
    break
  default:
    console.log("Ninguém ganhou")
    break;
}