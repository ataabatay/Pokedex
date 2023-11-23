import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"


export default function Home() {

    return (
        <div className="home-container">
            <h1 className="title">Illustrated Pokémon Encyclopedia</h1>
            <Button as={Link} to={"/pokemon"} type="button" className="btn btn-outline-warning"><span>Catch 'Em All</span></Button>
        </div>
    )
}