import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"


export default function Home() {




    return (
        <div className="home-container">
            <img id="pokedex" src='../src/assets/images/pokedex.png'/>
            <h1 className="title">Illustrated Pokémon Encyclopedia</h1>
            <Button as={Link} to={"/pokemon"} type="button" className="btn btn-outline-warning"><span>Catch 'Em All</span></Button>
            <Button as={Link} to={`/pokemon/${Math.floor((Math.random() * 1017) + 1)}`} type="button"><span>I'm Feeling Lucky</span></Button>
        </div>
    )
}