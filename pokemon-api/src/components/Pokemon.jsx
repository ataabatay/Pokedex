import { useLoaderData, Link } from 'react-router-dom'
import Filter from './Filters'
import { useEffect, useState } from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Pokemon() {

    const pokemons = useLoaderData()

    const { allPokemon } = pokemons
    const [pokemon, setPokemon] = useState(allPokemon.results)
    const [filters, setFilters] = useState('')
    const [filteredPokemon, setFilteredPokemon] = useState([])


    function handleSearch(e) {
        setFilters(e.target.value)
    }
    useEffect(() => {
        const pattern = new RegExp(filters, 'i')
        const filteredArray = pokemon.filter(creature => {
            return pattern.test(creature.name)
        })
        setFilteredPokemon(filteredArray)
    }, [filters, pokemon, setFilteredPokemon])
   

    const pokemonIndex = pokemon.map((poke) => {
        return poke.name
    })


    return (
        <>

            <Filter />
            <input name="search" placeholder="Search..." onChange={handleSearch} />
            <h1>All Pokemon</h1>
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
                                    <img style={{ width: '60px', height: '' }} className="card-img-top" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonIndex.indexOf(pokemon.name) + 1}.png`} alt={pokemon.name} />
                                    <div className="card-body">
                                        <h5 className="card-title">{pokemon.name}</h5>
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
                                    <img style={{ width: '60px', height: '' }} className="card-img-top" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${idx + 8984}.png`} alt={pokemon.name} />
                                    <div className="card-body">
                                        <h5 className="card-title">{pokemon.name}</h5>
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