import { useLoaderData, Link, useNavigation } from 'react-router-dom'
import Filter from './Filters'
import { useEffect, useState } from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Spinner from 'react-bootstrap/Spinner'

export default function Pokemon() {
    const navigation = useNavigation()
    // Load in API data
    const pokemons = useLoaderData()
    // Destructure data
    const { allPokemon } = pokemons

    // Creating states for filter to work and render filtered state
    const [pokemon, setPokemon] = useState(allPokemon.results)
    const [filters, setFilters] = useState('')
    const [filteredPokemon, setFilteredPokemon] = useState([])

    // Getting input from search bar
    function handleSearch(e) {
        setFilters(e.target.value)
    }

    // Filter effect rerendering each time search bar input changes
    useEffect(() => {
        const pattern = new RegExp(filters, 'i')
        const filteredArray = pokemon.filter(creature => {
            return pattern.test(creature.name)
        })
        setFilteredPokemon(filteredArray)
    }, [filters, pokemon, setFilteredPokemon])

    // Getting abolsute index for each pokemon
    const pokemonIndex = pokemon.map((poke) => {
        return poke.name
    })


    return (
        <>
            <div className='filters'>
                <Filter />
                <input name="search" placeholder="Search..." onChange={handleSearch} />
            </div>
            <Container fluid>
                <Row>
                    {filteredPokemon.map((pokemon, idx) => {
                        if (idx + 1 <= 1017) {
                            return (
                                <Col
                                    as={Link}
                                    key={pokemon.url} className="card"
                                    xs={6}
                                    md={4}
                                    lg={3}
                                    to={`/pokemon/${pokemon.name}`}>
                                    <img className="card-img-top" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonIndex.indexOf(pokemon.name) + 1}.png`} alt={pokemon.name} />
                                    <div className="card-body">
                                        <h5 className="card-title">{(pokemon.name).toUpperCase().charAt(0) + pokemon.name.slice(1, pokemon.name.length)}</h5>
                                    </div>
                                </Col>
                            )
                        } else if (idx + 1 > 1017 && idx + 1 <= 10275) {
                            return (
                                <Col
                                    as={Link}
                                    key={pokemon.url} className="card"
                                    xs={6}
                                    md={4}
                                    lg={3}
                                    to={`/pokemon/${idx + 8984}`}>
                                    {navigation.state === 'idle' ?
                                        <img className="card-img-top" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${idx + 8984}.png`} alt={pokemon.name} /> :
                                        <div className="centred">
                                            <Spinner animation='border' />
                                        </div>
                                    }

                                    <div className="card-body">
                                        <h5 className="card-title">{(pokemon.name).toUpperCase().charAt(0) + pokemon.name.slice(1, pokemon.name.length)}</h5>
                                    </div>
                                </Col>
                            )
                        } else {
                            return
                        }

                    })}



                </Row>
            </Container>

        </>
    )
}