import { useLoaderData, Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Filter from './Filters'

export default function PokemonByType() {

    const pokemons = useLoaderData()

    const { pokemonType, pokemonSearch } = pokemons

    const pokemonIndex = pokemonSearch.results.map((poke) => {
        return poke.name
    })


    return (
        <>
        <Filter />
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
                                        <h5 className="card-title">{creature.pokemon.name}</h5>
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
                                        <h5 className="card-title">{creature.pokemon.name}</h5>
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