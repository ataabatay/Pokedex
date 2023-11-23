import { useLoaderData, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Filter from './Filters'

export default function PokemonByType() {
    const pokemons = useLoaderData()
    const { pokemonType, pokemonSearch } = pokemons

console.log(pokemons)

    const [pokemon, setPokemon] = useState(pokemonType.pokemon)
    const [filters, setFilters] = useState('')
    const [filteredPokemon, setFilteredPokemon] = useState(pokemon)


    useEffect(() => {
        const pattern = new RegExp(filters, 'i')
        const filteredArray = pokemon.filter(creature => {
            return pattern.test(creature.name)
        })
        setFilteredPokemon(filteredArray)
        console.log(filters)
    }, [filters, pokemon, setFilteredPokemon])


    const pokemonIndex = pokemonSearch.results.map((poke) => {
        return poke.name
    })

    function handleSearch(e) {
        setFilters(e.target.value)
    }

    console.log(filteredPokemon)
    console.log(pokemon)
    console.log(pokemonType.pokemon)

    return (
        <>
            <Filter setPokemon={setPokemon} pokemons={pokemons}/>
            <input name="search" placeholder="Search..." onChange={handleSearch} />
            <Container fluid>
                <Row>
                    {pokemonType.pokemon.map(creature => {
                        if (pokemonIndex.indexOf(creature.pokemon.name) + 1 <= 1017) {
                            return (
                                <Col
                                    as={Link}
                                    key={creature.url} className="card"
                                    xs={6}
                                    md={4}
                                    lg={3}
                                    to={`/pokemon/${creature.pokemon.name}`}>

                                    <img style={{ width: '60px', height: '' }} className="card-img-top" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonIndex.indexOf(creature.pokemon.name) + 1}.png`} alt={creature.pokemon.name} />
                                    <div className="card-body">
                                        <h5 className="card-title">{(creature.pokemon.name).toUpperCase().charAt(0) + creature.pokemon.name.slice(1, creature.pokemon.name.length)}</h5>
                                    </div>
                                </Col>
                            )
                        } else if (pokemonIndex.indexOf(creature.pokemon.name) + 1 > 1017 && pokemonIndex.indexOf(creature.pokemon.name) + 1 <= 10275) {
                            return (
                                <Col
                                    as={Link}
                                    key={creature.url} className="card"
                                    xs={6}
                                    md={4}
                                    lg={3}
                                    to={`/pokemon/${creature.pokemon.name}`}>

                                    <img style={{ width: '60px', height: '' }} className="card-img-top" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonIndex.indexOf(creature.pokemon.name) + 8984}.png`} alt={creature.pokemon.name} />
                                    <div className="card-body">
                                        <h5 className="card-title">{(creature.pokemon.name).toUpperCase().charAt(0) + creature.pokemon.name.slice(1, creature.pokemon.name.length)}</h5>
                                    </div>
                                </Col>
                            )
                        } else {
                            return
                        }

                    })}


                </Row>
            </Container>
            <h1>Pokemon By Type</h1>
        </>
    )
}