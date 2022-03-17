import Timer from "../../pages/Timer"
import MyTime from "../../pages/Clock"
import Chrono from "../../pages/Chrono"
import { Link } from "react-router-dom"

export default function Layout({children}) {
   return ( 
    <>
    <Link to="/">Home</Link>
    <Link to="/Clock">Clock</Link>
    <Link to="/Timer">Timer</Link>
    <Link to="/Chrono">Chronometer</Link>
    </>
    )
}