import { useEffect, useState } from "react"
import Layout from "../../components/Layouts";

const Timer = ( ) => {

    const [time, setTime] = useState(0);
    const [start, setStart] = useState(false)

    let seconds = ("0" + (Math.floor((time / 1000) % 60) % 60)).slice(-2);
    let minutes = ("0" + Math.floor((time / 60000) % 60)).slice(-2);
    let hours = ("0" + Math.floor((time / 3600000) % 60)).slice(-2);

    useEffect(() => {
        let interval = null
        if (start) {
            interval = setInterval(() => {
                if (time > 0) {
                    setTime(prevTime => prevTime-10)
                }
            }, 10)
        } else {
            clearInterval(interval);
        }
        return () => {
            clearInterval(interval)
        }
    }, [start])

    function handleChange(input) {
        if (!start) {
            switch (input) {
                case "addHours":
                  setTime(prevTime => prevTime + 3600000)
                    break;
                case "subHours":
                  setTime(prevTime => prevTime - 3600000)
                    break;
                case "addMin":
                    setTime(prevTime => prevTime + 60000)
                        break;
                case "subMin":
                    setTime(prevTime => prevTime - 60000)
                        break;
                case "addSec":
                    setTime(prevTime => prevTime + 1000)
                        break;
                case "subSec":
                    setTime(prevTime => prevTime - 1000)
                        break;
                default:
                    break;
        }
    }
}
    return(
        <div>
        <Layout/>
            <h1 class="text-xl mb-2">Timer</h1>
            <p class="text-3xl mb-5">{hours} : {minutes} : {seconds} </p>
            <button class="border-2 p-1 border-blue-300 rounded-lg" onClick={() => handleChange("addHours")}>&#8679; +H</button>
            <button class="border-2 p-1 border-red-300 rounded-lg mr-3" onClick={() => handleChange("subHours")}>&#8681; -H</button>
            <button class="border-2 p-1 border-blue-300 rounded-lg" onClick={() => handleChange("addMin")}>&#8679; +M</button>
            <button class="border-2 p-1 border-red-300 rounded-lg mr-3" onClick={() => handleChange("subMin")}>&#8681; -M</button>
            <button class="border-2 p-1 border-blue-300 rounded-lg" onClick={() => handleChange("addSec")}>&#8679; +S</button>
            <button class="border-2 p-1 border-red-300 rounded-lg mr-3" onClick={() => handleChange("subSec")}>&#8681; -S</button>
            <div class="mt-2">
            <button class="border-2 p-2 border-yellow-500 bg-yellow-400 rounded mr-2" onClick={() => setStart(true)}> Start  </button>
            <button class="border-2 p-2 border-yellow-500 bg-yellow-400 rounded mr-2" onClick={() => setStart(false)}> Pause  </button>
            <button class="border-2 p-2 border-yellow-500 bg-yellow-400 rounded mr-2" onClick={() => {setTime(0);setStart(false)}}>Restart</button>
            </div>
        </div>
    )
}

export default Timer