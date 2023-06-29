import React from 'react'
import { useEffect } from 'react';
import { getPadTime } from '../../../../helpers/getPadTime';
import '../../../../css/mainTimer.css'


const Timer = ({props,timerLoad,reset}) => {
  const timeLeft = props.timeLeft
  const isCounting = props.timerIsActive
  
    const hours = getPadTime(Math.floor(timeLeft/36000));
    const minutes = getPadTime(Math.floor(timeLeft/600) - hours*60);
    const seconds = getPadTime((Math.floor(timeLeft/10)) - (minutes * 60 + hours * 3600));
    useEffect(()=>{
        const interval = setInterval(()=>{
          isCounting &&
          reset(()=>(hours<=6? timeLeft +1: 0))
        }, 100);
        if (timeLeft>=6*36000) {
          timerLoad(false);
          reset(0)
        }
        return ()=>{
          clearInterval(interval);
        };
      }, [timeLeft, isCounting])


  return (
    <div className={props.style}>
          <span>{hours}</span>
          <span>:</span>
          <span>{minutes}</span>
          <span>:</span>
          <span>{seconds}</span>
    </div>
  )
}

export default Timer