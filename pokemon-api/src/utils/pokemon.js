export async function getAllPokemon() {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=151')
    return res.json()
}

export async function getSinglePokemon(id) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    return res.json()
}

export async function getPokemonByType(type) {
    const res = await fetch(`https://pokeapi.co/api/v2/type/${type}`)
    return res.json()
}


// 1,017 unique pokemon
// 1,292 items from API