const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`


function convertPokemonToLi(pokemon) {
  return `
  <li class="pokemon">
    <span class="numero">#001</span>
    <span class="nome">${pokemon.name}</span>

    <div class="detalhes">
      <ol class="types">
        <li class="type">grass</li>
        <li class="type">poison</li>
      </ol>

      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
        alt="${pokemon.name}" srcset="">
    </div>
  </li>
  `

}


const pokemonsLista = document.getElementById('pokemonsLista')


  pokeApi.getPokemons()
    .then(function (pokemonLista) {
      for (let i = 0; i < pokemonLista.length; i++) {
        const pokemon = pokemonLista[i];
        pokemonsLista.innerHTML += convertPokemonToLi(pokemon)


      }
    })

  .catch(function (error) {
    console.log(error)
  })
  .finally(function () {
    console.log("Requisição concluída")
  })