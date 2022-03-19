import Layout from "../../components/Layouts"
import { useState, useEffect } from "react";

const Chrono = ( ) => {
    const [time, setTime] = useState(0);
    const [start, setStart] = useState(false)

    useEffect(() => {
        let interval = null
        if (start) {
            interval = setInterval(() => {
                if (time == 0 ) {
                    setTime(prevTime => prevTime+10)
                }
            }, 10)
        } if (!start) {
            interval = setInterval(() => {
                if (time > 0 || time ==0 || setStart(true)) {
                    setTime(prevTime => prevTime+10)
                }
            }, 10)
        }else {
            clearInterval(interval);
        }
        return () => {
            clearInterval(interval)
        }
    }, [start])

    let seconds = ("0" + (Math.floor((time / 1000) % 60) % 60)).slice(-2);
    let minutes = ("0" + Math.floor((time / 60000) % 60)).slice(-2);
    let hours = ("0" + Math.floor((time / 3600000) % 60)).slice(-2);
    return(
        <div>
            <Layout/>
            <h2>Cronometro</h2>
            <p>{hours} : {minutes} : {seconds} </p>
            <button onClick={() => setStart(false)}> Start / </button>
            <button onClick={() => setStart(true)}> Pause / </button>
            <button onClick={() => {setTime(0);setStart(true)}}>Restart</button>
        </div>
    )
}

export default Chrono