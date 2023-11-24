export async function pokemonLoader() {
    const all = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=2000')
    const allPokemon = await all.json()
    const types = await fetch(`https://pokeapi.co/api/v2/type/`)
    const allTypes = await types.json()
    return { allPokemon, allTypes } 
}

export async function getSinglePokemon(id) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    return res.json()
}

export async function getPokemonByType(type) {
    const res = await fetch(`https://pokeapi.co/api/v2/type/${type}`)
    const pokemonType = await res.json()
    const all = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=2000')
    const pokemonSearch = await all.json()

    return { pokemonType, pokemonSearch }
}


// 1,017 unique pokemon
// 1,292 items from API