import React from 'react';
import ReactClock from '@uiw/react-clock';
import { useTime } from "react-timer-hook"
import Layout from '../../components/Layouts';

  function MyTime() {
    const {
      seconds,
      minutes,
      hours,
      ampm,
    } = useTime({ format: '12-hour'});
  
    return (
      
      <div style={{textAlign: 'center'}}>
      <Layout/>
      <p>Clocks</p>
       <ReactClock/>
        <div style={{fontSize: '100px'}}>
          <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span><span>{ampm}</span>
        </div> 
      </div>
     
    );
  }

export default MyTime