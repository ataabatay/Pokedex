import { useLoaderData, Link } from 'react-router-dom'
import Filter from './Filters'
import { useEffect, useState } from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Pokemon() {
    // const navigate = useNavigate()
    const pokemons = useLoaderData()

    const { allPokemon } = pokemons
    const [filters, setFilters] = useState('')
    const [shownPokemon, setShownPokemon] = useState(allPokemon.name)

    // const [ filteredPokemon, setFilteredPokemon ] = useState()

    function handleSearch(e) {
        console.log(e.target.value)
        setFilters(e.target.value)
    }

    useEffect(() => {
        const pattern = new RegExp(filters, 'i')
        const filteredPokemon = allPokemon.results.filter(creature => {
            return pattern.test(creature.name)
        })

        setShownPokemon(filteredPokemon)
        // console.log(shownPokemon)

    }, [filters, allPokemon, setShownPokemon, shownPokemon])



    // const [ pokemon, setPokemon ] = useState(allPokemon.results)

    // console.log(pokemon)



    return (
        <>

            <Filter />
            <input name="search" placeholder="Search..." onChange={handleSearch} />
            <h1>All Pokemon</h1>
            <Container fluid>
                <Row>
                    {allPokemon.results.map((pokemon, idx) => {
                        if (idx + 1 <= 1017) {
                            return (
                                <Col
                                    as={Link}
                                    key={pokemon.url} className="card"
                                    xs={6}
                                    md={4}
                                    lg={3}
                                    to={`/pokemon/${idx + 1}`}>
                                    <img style={{ width: '60px', height: '' }} className="card-img-top" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${idx + 1}.png`} alt={pokemon.name} />
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