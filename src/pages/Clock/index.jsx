import React from 'react';
import ReactClock from '@uiw/react-clock';
import { useTime } from "react-timer-hook"
import Layout from '../../components/Layouts';
import AnalogClock from '../../components/AnalogClock';
import DigitalClock from '../../components/DigitalClock';

  function MyTime() {
   
    return (
      
      <div>
      <Layout/>
        <div>
          <AnalogClock/>
        </div>

          <DigitalClock/>

      </div>
     
    );
  }

export default MyTime