import { useLoaderData } from 'react-router-dom'

export default function PokemonByType() {
    
    const pokemonByType = useLoaderData()
    console.log(pokemonByType)
   
    return (
       <h1>Pokemon By Type</h1>
    )
}