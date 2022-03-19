import React from 'react';

import { useTime } from "react-timer-hook"

export default function DigitalClock() {
    const {
      seconds,
      minutes,
      hours,
      ampm,
    } = useTime({ format: '24-hour'});
   
    return (
      
      <div style={{textAlign: 'center'}}>
      <p>Clocks</p>
       <div style={{fontSize: '100px'}}>
          <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span><span>{ampm}</span>
        </div> 
      </div>
     
    );
  }
