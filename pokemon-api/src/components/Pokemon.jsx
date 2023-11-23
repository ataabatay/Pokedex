import { useLoaderData, Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Pokemon() {

    const pokemons = useLoaderData()
    console.log(pokemons)

    const { allPokemon, allTypes } = pokemons
    console.log(`All Types: ${allTypes.results}`)

    // const [activePokemon, setActivePokemon] = useState(pokemons)

    // const uniqueTypes = new Set()

    return (
        <>
            <label htmlFor="types">Search by type: </label>
            <select id="types" name="types">
                {allTypes.results.map((type, idx) => {
                    return <option key={idx} value={type.name}>{type.name}</option>
                })}


            </select>
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