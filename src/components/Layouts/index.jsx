import Timer from "../../pages/Timer"
import MyTime from "../../pages/Clock"
import Chrono from "../../pages/Chrono"
import { Link } from "react-router-dom"

export default function Layout({children}) {
   return ( 
    <div class="mb-20  h-8 bg-yellow-500 text-color-white">
    <Link to="/" class="m-12 ">Clock</Link>
    <Link to="/Timer" class="m-8">Timer</Link>
    <Link to="/Chrono" class="m-8 ">Chronometer</Link>
    </div>
    )
}