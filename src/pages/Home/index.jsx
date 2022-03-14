import { Link } from "react-router-dom"

const Home = ( ) => {
    return(
        <div>
            <h2>Ecco la home :)</h2>
                <Link to="/timer">Timer</Link>
                <Link to="/clock">Orologio</Link>
                <Link to="/chrono">Cronometro</Link>
        </div>
    )
}

export default Home