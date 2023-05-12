import React from 'react'
import { useEffect, useState } from 'react';
import { getPadTime } from '../../../../helpers/getPadTime';

const Timer = ({props,timerLoad,reset}) => {
  /* console.log(props) */
  const timeLeft = props.timeLeft
  const isCounting = props.timerIsActive
  
    const hours = getPadTime(Math.floor(timeLeft/3600));
    const minutes = getPadTime(Math.floor(timeLeft/60) - hours*60);
    const seconds = getPadTime(timeLeft - (minutes * 60 + hours * 3600));
    useEffect(()=>{
        const interval = setInterval(()=>{
          isCounting &&
          reset(()=>(hours<=6? timeLeft +1: 0))
        }, 1000);
        if (timeLeft>=6*3600) {
          timerLoad(false);
          reset(0)
        }
        return ()=>{
          clearInterval(interval);
        };
      }, [timeLeft, isCounting])


  return (
    <div>
          <span>{hours}</span>
          <span>:</span>
          <span>{minutes}</span>
          <span>:</span>
          <span>{seconds}</span>
    </div>
  )
}

export default Timer