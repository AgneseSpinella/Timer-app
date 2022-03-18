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
            <h2>Timer</h2>
            <p>{hours} : {minutes} : {seconds} </p>
            <button onClick={() => handleChange("addHours")}>&#8679; </button>
            <button onClick={() => handleChange("subHours")}>&#8681; h</button>
            <button onClick={() => handleChange("addMin")}>&#8679;</button>
            <button onClick={() => handleChange("subMin")}>&#8681; m</button>
            <button onClick={() => handleChange("addSec")}>&#8679;</button>
            <button onClick={() => handleChange("subSec")}>&#8681; s</button>
            <button onClick={() => setStart(true)}> /Start / </button>
            <button onClick={() => setStart(false)}> Pause / </button>
            <button onClick={() => {setTime(0);setStart(false)}}>Restart</button>
        </div>
    )
}

export default Timer