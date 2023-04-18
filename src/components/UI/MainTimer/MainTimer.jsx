import React from 'react'
import { useEffect, useState } from 'react';
import { getPadTime } from '../../../helpers/getPadTime';

const MainTimer = () => {

    const[timeLeft, setTimeLeft] = useState(0);
    const[isCounting,setIsCounting] = useState(false);
  
    const hours = getPadTime(Math.floor(timeLeft/3600));
    const minutes = getPadTime(Math.floor(timeLeft/60) - hours*60);
    const seconds = getPadTime(timeLeft - (minutes * 60 + hours * 3600));
  
  
    useEffect(()=>{
      const interval = setInterval(()=>{
        isCounting &&
         setTimeLeft((timeLeft)=>(hours<=99? timeLeft + 1: 0))
      }, 1000);
      if (timeLeft>=6*3600) {
        setIsCounting(false);
        setTimeLeft(0)
      }
      return ()=>{
        clearInterval(interval);
      };
    }, [timeLeft, isCounting])
  
    const handleStart = ()=>{setIsCounting(true)};
  
    const handleStop = ()=>{setIsCounting(false)};
  
    const handleReset = ()=>{setIsCounting(false); setTimeLeft(0)};
  return (
    <div>
        <div className='main__timer main-timer'>
          <span>{hours}</span>
          <span>:</span>
          <span>{minutes}</span>
          <span>:</span>
          <span>{seconds}</span>
        </div>
        <div className='main__timer__buttons'>
          {isCounting ? (
              <button className='text-size' onClick={handleStop}>stop</button>
            ):(
              <button className='text-size' onClick={handleStart}>start</button>)
          }
          <button className='text-size' onClick={handleReset}>reset</button>
        </div>
    </div>
  )
}

export default MainTimer