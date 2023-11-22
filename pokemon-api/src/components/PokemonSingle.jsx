import { useLoaderData } from 'react-router-dom'

export default function PokemonSingle() {
    const pokemons = useLoaderData()
    console.log(pokemons)

    const { forms: [{ name }], stats, types } = pokemons





    return (
        <>
            <h1>{name}</h1>
            <img src={pokemons.sprites.other['official-artwork'].front_default} />

            <div id="types-container">
                {types.map((pType, idx) => {
                    return <h3 key={idx}>{pType.type.name}</h3>

                })}
            </div>

            {stats.map((statistic, idx) => {
                return (
                    <p key={idx}>{statistic.stat.name}: {statistic.base_stat}</p>
                )
            })}

        </>
    )
}