import { useLoaderData, Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Pokemon() {

    const pokemons = useLoaderData()
    console.log(pokemons)

    // const [activePokemon, setActivePokemon] = useState(pokemons)

    // const uniqueTypes = new Set()

    return (
        <>
                    
            {/* <label htmlFor="types">Search by type: </label>
            <select id="types" name="types"/>
                {.map((continent, idx) => {
                    return (
                        <option key={idx} value={continent}>{continent}</option>
                    )
                })} */}

            <h1>All Pokemon</h1>
            <Container fluid>
                <Row>
                    {pokemons.results.map((pokemon, idx) => {
                        return (
                            <Col 
                            as={Link} 
                            key={pokemon.url} className="card" 
                            xs={6} 
                            md={4} 
                            lg={3} 
                            to={`/pokemon/${idx + 1}`}>
                                <img style={{ width: '60px', height: '' }} className="card-img-top" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${idx + 1}.png`} alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">{pokemon.name}</h5>
                                </div>
                            </Col>
                        )
                    })}
                </Row>
            </Container>

        </>
    )
}