import { useLoaderData } from 'react-router-dom'

export default function PokemonSingle() {
    const pokemons = useLoaderData()
    const { forms: [{ name }], stats, types } = pokemons
    
    return (
        <>
            <h1 className="single-name">{(name).toUpperCase().charAt(0) + name.slice(1, name.length)}</h1>
            <img src={pokemons.sprites.other['official-artwork'].front_default} />
            <div className="bio">
                <div id="types-container">
                    {types.map((pType, idx) => {
                        return (
                            <div key={idx} id="text-box" className={pType.type.name}>
                                <h3>{(pType.type.name).toUpperCase().charAt(0) + pType.type.name.slice(1, pType.type.name.length)}</h3>
                            </div>

                        )

                    })}
                </div>

                <div className='stat-container'>
                    {stats.map((statistic, idx) => {
                        return (
                            <p key={idx}>{statistic.stat.name}: {statistic.base_stat}</p>
                        )
                    })}
                </div>
            </div>
        </>
    )
}