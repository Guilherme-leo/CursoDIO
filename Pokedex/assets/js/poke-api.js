const pokeApi = {}

pokeApi.getPokemons =  (offset = 0, limit = 10) =>{
  const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`
  return fetch(url)
  .then((resposta) => resposta.json())
  .then((respostaConvert) => respostaConvert.results)
  .catch((erro) => console.log(erro))
}