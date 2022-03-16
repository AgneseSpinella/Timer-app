import { Link } from "react-router-dom"

const Home = ( ) => {
    return(
        <div>
            <h2>Ecco la home :)</h2>
                <ul>
                    <li>
                        <Link to="/timer">Timer</Link>
                    </li>
                    <li>
                        <Link to="/clock">Orologio</Link>
                    </li>
                    <li>
                        <Link to="/chrono">Cronometro</Link>
                    </li>
                </ul>
        </div>
    )
}

export default Home