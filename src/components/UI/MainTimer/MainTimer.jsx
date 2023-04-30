import React from 'react'
import { useState, useMemo} from 'react';
import Timer from './Timer/Timer';


const MainTimer = ({props,timerLoad,resetLaps}) => {

  const[timeLeft, setTimeLeft] = useState(0);

  const handleStart = ()=>{timerLoad(true); resetLaps(false)};
  
  const handleStop = ()=>{timerLoad(false)};
  
  const handleReset = ()=>{timerLoad(false); setTimeLeft(0); resetLaps(true)};

  const reset =()=>{
    setTimeLeft(0)
  }
    
  return (
    <div>
        <Timer props={{props,timeLeft}} timerLoad={timerLoad} reset = {reset}/>
        <div className='main__timer__buttons'>
          {props.isCounting ? (
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