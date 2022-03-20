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
      

       <div class="float-right -mt-20 mr-80 text-3xl">
          <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span><span>{ampm}</span>
        </div> 

     
    );
  }
