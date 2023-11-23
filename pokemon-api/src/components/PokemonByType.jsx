import { useLoaderData, Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function PokemonByType() {

    const pokemonByType = useLoaderData()
    console.log(pokemonByType)



    const { pokemonType, pokemonSearch } = pokemonByType


    console.log(`Pokemon by types: ${pokemonType.pokemon.name}`)
    console.log(`Index of pokemon: ${pokemonSearch.results[0].name}`)


    const pokemonIndex = pokemonSearch.results.map((poke) => {
        return poke.name
    })

    console.log(`Pokemon Index ${pokemonIndex[0]}`)

    console.log(pokemonIndex)

    return (
        <>
            <Container fluid>
                <Row>
                    {pokemonType.pokemon.map((creature, idx) => {
                        if (pokemonIndex.indexOf(creature.pokemon.name) + 1 <= 1017) {
                            console.log(pokemonIndex.indexOf(creature.pokemon.name) + 1)
                            return (
                                <Col
                                    as={Link}
                                    key={creature.url} className="card"
                                    xs={6}
                                    md={4}
                                    lg={3}
                                    to={`/pokemon/${creature.pokemon.name}`}>

                                    <img style={{ width: '60px', height: '' }} className="card-img-top" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/
                                    ${pokemonIndex.indexOf(creature.pokemon.name) + 1}.png`} alt={creature.pokemon.name} />
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

                                    <img style={{ width: '60px', height: '' }} className="card-img-top" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/
                                    ${pokemonIndex.indexOf(creature.pokemon.name) + 8984}.png`} alt={creature.pokemon.name} />
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